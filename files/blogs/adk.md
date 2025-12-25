---
key: adk
title: Guide to Building with Google’s ADK
date: 25/12/2025
tags:
  - Tech
  - Framework Development
description: Discussion on how to use Google's ADK in Production Systems.
---
I’ve seen a *lot* of discussion around OpenAI’s Agents SDK recently, and at **eesel** we’ve been experimenting with a few different Agent Development Kits. One thing I noticed pretty quickly: there’s almost no real discourse around **Google’s ADK**.

And honestly? It’s not trivial to understand.

So this post is my attempt at a small, practical guide based on actually wiring ADK into a production system.

---

## What ADK actually is

At its core, **ADK is an agent orchestration framework**.

It’s really good at:

* Orchestrating sub-agents
* Managing sessions and long-running state
* Applying global instructions consistently

It’s *not* just a thin LLM wrapper. You’re buying into a runtime.

One nice thing: **ADK is model-agnostic** in spirit. Natively it supports:

* Google Gemini
* Anthropic

If you want anything else, something like **LiteLLM** can bridge the gap and make ADK usable with basically any provider.

For Python devs specifically: ADK wraps `google-genai`, which is great because upstream Gemini changes tend to flow downstream cleanly.

---

## Core concepts in ADK

### `LlmAgent`

This is the foundational abstraction you’ll use everywhere.

An `LlmAgent`:

* Defines the model
* Sets a max turn count (default is **500**)
* Handles planning, tool usage, and reasoning

Important note (this cost me time):

> **Yes, `LlmAgent` has `run_async()` — but you almost never want to call it directly.**

For ~90% of real use cases, you want to run agents through a **`Runner`**, not directly. The runner handles session wiring, persistence, and lifecycle hooks.

```python
from google.adk.agents import LlmAgent
from google.adk.planners.built_in_planner import BuiltInPlanner
from google.genai.types import ThinkingConfig, ThinkingLevel

agent = LlmAgent(
    name="Agent",
    model="gemini-3-flash-preview",
    instruction="You are a helpful assistant.",
    planner=BuiltInPlanner(
        thinking_config=ThinkingConfig(
            include_thoughts=True,
            thinking_level=ThinkingLevel.HIGH,
        )
    ),
)
```

---

### Reasoning configuration (this part is confusing)

If you read ADK’s source, you’ll see hints that reasoning configuration belongs in `RunConfig`.

**That’s wrong.**

You configure reasoning via the **planner**, not the runner.

```python
planner=BuiltInPlanner(
    thinking_config=ThinkingConfig(
        include_thoughts=True,
        thinking_level=ThinkingLevel.HIGH,
    )
)
```

My guess: each model provider has wildly different planning prompts and internal architectures. Exposing too much here probably makes it easier to distill or reverse-engineer their secret sauce.

---

## Configuring MCP servers

This is another non-obvious ADK quirk.

You **can’t** just pass MCP config directly. You have to instantiate an `MCPToolset`.

ADK wraps the `mcp` package internally, so types like `StreamableHTTPConnectionParams` are just thin wrappers over the MCP client.

The upside: **ADK manages the entire MCP connection lifecycle for you.** No context managers, no manual session cleanup like you’d need with OpenAI’s Agents SDK.

```python
from google.adk.tools.mcp_tool import MCPToolset, StreamableHTTPConnectionParams

toolset = MCPToolset(
    connection_params=StreamableHTTPConnectionParams(
        url=server.base_url,
        headers=server.auth_headers,
    )
)
```

---

## Session management

Session management across agent frameworks is basically the same idea everywhere:

> a callback interface that fires on runtime events

In ADK, this abstraction is called a **`SessionService`**.

If you’re doing anything real in production, you’ll end up implementing your own session service so you can:

* Persist events
* Recover from crashes
* Resume partially completed runs

**Use database-backed session persistence early.** If your server crashes mid-run and you only persist at the end, you will lose data.

---

## Parsing events (aka personal hell)

Every agent framework invents its own `Event` interface. ADK is no exception.

You *will* need to normalize ADK events into your own internal format.

One particularly nasty gotcha:

* `event.content` is typed as `Dict[str, Any]`
* But when an MCP tool runs, ADK silently swaps that out for a `ToolCallResult`

If you don’t handle this explicitly, your parser will break.

```python
def parse_event(self, event: Event):
    if not event.content or not event.content.parts:
        return None

    for part in event.content.parts:
        if part.text:
            return ResponseChunk(type="message", content=part.text)

        elif part.function_call:
            return ResponseChunk(
                type="tool_call",
                tool_name=part.function_call.name,
                tool_arguments=dict(part.function_call.args or {}),
            )

        elif part.function_response:
            response = part.function_response.response or {}
            is_error = "error" in response

            return ResponseChunk(
                type="tool_error" if is_error else "tool_result",
                tool_output=response,
            )
```

---

## Streaming + gunicorn (the ugly bit)

ADK is async-first. If you’re running behind **gunicorn**, you’ll need to bridge async execution into a sync generator.

The general pattern:

* Run ADK in its own event loop + thread
* Push parsed chunks into a queue
* Yield synchronously to the client

It’s not pretty, but it’s reliable.

---

## Final thoughts

There’s still more I want to explore — especially converting **reasoning tokens** into our own internal formats. That part is… painful.

One last warning if you’re using **Gemini**:

> Token streaming isn’t great.

Gemini batches large chunks of tokens before emitting anything, which leads to a pretty bad UX. OpenAI’s token-by-token streaming *feels* much better, even if it’s more expensive and probably hurts TPS.

That batching behavior may also be tied to Gemini’s reasoning summaries, which is a whole other can of worms.

I’ll keep adding to this as I run into more sharp edges.

