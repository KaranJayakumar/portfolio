"use client";

import { Blog } from "@/app/types";
import Link from "next/link";

interface ListItemProps {
  blog: Blog;
}

export function BlogListItem({ blog }: ListItemProps) {
  return (
    <article>
      <Link href={`/blogs/${blog.key}`} className="group block outline-none">
        <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-400">
          <time>{blog.date}</time>
          {blog.tags?.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <h2 className="text-xl font-medium tracking-tight transition-colors group-hover:text-gray-500 group-focus-visible:text-gray-500">
          {blog.title}
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
          {blog.description}
        </p>
      </Link>
    </article>
  );
}
