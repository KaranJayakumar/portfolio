"use client";

import { useMemo, useState } from "react";
import { Blog } from "@/app/types";
import { BlogListItem } from "./BlogListItem";

interface BlogExplorerProps {
  blogs: Blog[];
}

export function BlogExplorer({ blogs }: BlogExplorerProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const tags = useMemo(
    () => Array.from(new Set(blogs.flatMap((blog) => blog.tags ?? []))).sort(),
    [blogs],
  );

  const visibleBlogs = activeTag
    ? blogs.filter((blog) => blog.tags?.includes(activeTag))
    : blogs;

  return (
    <div className="grid min-h-[36rem] w-full content-start gap-8 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-x-20 md:gap-y-8">
      <h1 className="text-4xl font-semibold tracking-tight md:col-start-2">
        Things I&apos;m Thinking About
      </h1>

      <aside className="self-start md:col-start-1 md:row-start-2 md:sticky md:top-12">
        <p className="mb-4 text-sm font-medium text-gray-400">Topics</p>
        <nav aria-label="Filter posts by topic">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 md:flex-col md:items-start md:gap-2">
            <li>
              <button
                type="button"
                onClick={() => setActiveTag(null)}
                aria-pressed={activeTag === null}
                className={`cursor-pointer text-left text-sm transition-colors hover:text-black ${
                  activeTag === null ? "font-medium text-black" : "text-gray-500"
                }`}
              >
                All <span className="text-gray-400">{blogs.length}</span>
              </button>
            </li>
            {tags.map((tag) => {
              const count = blogs.filter((blog) => blog.tags?.includes(tag)).length;

              return (
                <li key={tag}>
                  <button
                    type="button"
                    onClick={() => setActiveTag(tag)}
                    aria-pressed={activeTag === tag}
                    className={`cursor-pointer text-left text-sm transition-colors hover:text-black ${
                      activeTag === tag ? "font-medium text-black" : "text-gray-500"
                    }`}
                  >
                    {tag} <span className="text-gray-400">{count}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      <section
        aria-live="polite"
        aria-label="Blog posts"
        className="min-w-0 md:col-start-2 md:row-start-2"
      >
        <div className="flex flex-col gap-10">
          {visibleBlogs.map((blog) => (
            <BlogListItem key={blog.key} blog={blog}/>
          ))}
        </div>
      </section>
    </div>
  );
}
