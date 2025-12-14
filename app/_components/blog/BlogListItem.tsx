"use client";

import { Blog } from "@/app/types";
import { useRouter } from "next/navigation";

interface ListItemProps {
  blog: Blog;
}

export function BlogListItem({ blog }: ListItemProps) {
  const router = useRouter();

  return (
    <div
      className="cursor-pointer py-[10px]"
      onClick={() => router.push(`/blogs/${blog.key}`)}
    >
      <p className="font-bold pb-[4px]">{blog.title}</p>
      <p className="text-sm text-gray-600">{blog.description}</p>
    </div>
  );
}
