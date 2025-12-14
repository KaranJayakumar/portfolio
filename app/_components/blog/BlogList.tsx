"use server"
import { BlogListItem } from './BlogListItem';
import { loadBlogs } from '@/app/utils/parsing';

export const BlogList = async () => {
  const blogs = await loadBlogs()
  return (
    blogs.map((blog, index) => {
        return (
          <BlogListItem key={index} blog={blog}/>
        )
      }
    )
  )
}
