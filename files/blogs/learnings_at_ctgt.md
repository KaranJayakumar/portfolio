---
key: learnings_at_ctgt
title: Learnings @ CTGT
date: 5/11/2026
description: Another collection of stuff I learned while working at CTGT in no real order.
tags:
  - Learning
---

# Engineering Principles

* Strong opinions loosely held.
* Let the access pattern define the data model.

# Coaching

* Let approaches fail once in a while. Letting people learn from experience is sometimes far more valuable than forcing the "correct" solution. It's also key to constantly challenge your own assumptions about approaches and design. Not all of your opinions are necessarily correct, if any at all.
* Try to rubber duck ideas with someone to get a better grasp of the gravity of the problems being discussed. At times, the things we're focused on are just minor details blocking real progress.
* Timing and responsibility. Being a senior comes with estimating work and delivering on those estimates. Make a constant effort to ensure we're on track and take action when things start to slip.

# Deploying large changes
* Always ensure there's a path to reverting the change. Reverting should be safe and trivial if the change was not successfully applied. 
* Account for the impossible. Databases often don't conform to the schema, things that seem like they must be true are often just not true. Assume everything can go wrong. 
* Dry run and log as much as possible. As much as you try to prepare, prod is often impossible to predict. Attempt to catalogue what would happen and reconcile that with your own understanding. 
* Automate anything that's manual. Having a manual step of having to type a command should just be in a script. Anyone who's involved should be brought into the process as a result of something failing, not as the approach itself. 
