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

async function loadBlogs() : Promise<Blog[]> {
  try{
    const files = await fs.readdir(process.cwd() + '/static/blogs')
    const results = []
    for(let i = 0; i < files.length; i++){
      const file = files[i]
      if(path.extname(file) == ".json"){
         const fileContent = await fs.readFile(process.cwd() + '/static/blogs/' + file, 'utf8');
         const blogData = JSON.parse(fileContent);
         const blog : Blog = {
           key : blogData.key,
           title : blogData.title,
           description : blogData.description,
           content : blogData.content,
         }
         results.push(blog)
      }
    }
    return results
  }catch(e){
    console.error("Error retrieving blogs", e)
    return []
  }
}
