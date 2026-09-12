"use server"
import { BlogExplorer } from './BlogExplorer';
import { loadBlogs } from '@/app/utils/parsing';

export const BlogList = async () => {
  const blogs = await loadBlogs()
  return <BlogExplorer blogs={blogs}/>
}
