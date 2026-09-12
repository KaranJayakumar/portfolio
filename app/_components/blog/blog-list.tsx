"use server"
import { BlogExplorer } from './blog-explorer';
import { loadBlogs } from '@/app/utils/parsing';

export const BlogList = async () => {
  const blogs = await loadBlogs()
  return <BlogExplorer blogs={blogs}/>
}
