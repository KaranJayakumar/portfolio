"use server"
import { promises as fs } from 'fs';
import path from 'path'
import { BlogListItem } from './BlogListItem';

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
