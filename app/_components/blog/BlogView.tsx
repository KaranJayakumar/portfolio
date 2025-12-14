"use server"
import { Streamdown } from 'streamdown';

interface Blog{
  key : string
  title : string
  description : string
  content : string
}

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
