"use client";

import { Blog } from "@/app/types";
import { useRouter } from "next/navigation";
import { Badge } from "../ui/badge";

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
      {
        blog.tags?.map((tag, index) => {
          return (
            <Badge key={index} className='rounded-lg border border-black mr-2 text-xs'>{tag}</Badge>
          )
        })
      }
    </div>
  );
}
