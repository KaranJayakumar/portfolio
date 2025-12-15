"use server"
import { loadBlog } from '@/app/utils/parsing';
import { Streamdown } from 'streamdown';

interface BlogViewParams {
  blogKey : string
}

export const BlogView = async ({blogKey} : BlogViewParams) => {
  const blog = await loadBlog(blogKey)
  if(!blog){
    return null
  }
  return (
    <>
      <h1 className="text-lg font-semibold mb-2">
        {blog.title}
      </h1>
      <p className="text-sm font-semibold mb-4 text-gray-500">
        {blog.description}
      </p>
      <p className="text-sm font-semibold mb-4 text-gray-500">
        {blog.date}
      </p>
      <Streamdown>{blog.content}</Streamdown>
    </>
  )
}
