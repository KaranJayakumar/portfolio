"use server"

import { loadBlog } from "@/app/utils/parsing"
import "@/app/styles/blog.css"
import { Streamdown } from "streamdown"

interface BlogViewParams {
  blogKey: string
}

export const BlogView = async ({ blogKey }: BlogViewParams) => {
  const blog = await loadBlog(blogKey)
  if (!blog) return null

  return (
    <article className="w-full flex">
      <div className="w-full max-w-3xl">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-2xl md:text-3xl font-semibold leading-tight">
            {blog.title}
          </h1>

          <time
            className="mt-2 block text-sm text-gray-400"
            dateTime={blog.date}
          >
            {blog.date}
          </time>

          {blog.description && (
            <p className="mt-3 text-sm text-gray-500 max-w-prose">
              {blog.description}
            </p>
          )}
        </header>

        {/* Content */}
        <div className="blog">
          <Streamdown className="text-[15px] leading-relaxed">
            {blog.content}
          </Streamdown>
        </div>
      </div>
    </article>
  )
}

