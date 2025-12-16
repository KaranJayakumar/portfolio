"use server"
import { loadBlog } from '@/app/utils/parsing';
import "@/app/styles/blog.css"
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
      <h1 className="text-xl font-semibold mb-2">
        {blog.title}
      </h1>
      <div className="flex flex-row justify-between w-full">
        <p className="text-sm font-semibold mb-2 text-gray-500">
          {blog.description}
        </p>
        <p className="text-sm font-bold mb-4">
          {blog.date}
        </p>

      </div>
      <div className='w-[70%] blog'>
        <Streamdown className='text-[15px]'>{blog.content}</Streamdown>
      </div>
    </>
  )
}
