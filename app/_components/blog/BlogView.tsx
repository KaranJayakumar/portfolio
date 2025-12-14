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
    <Streamdown>{blog.content}</Streamdown>
  )
}
