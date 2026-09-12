import path from 'path'
import { promises as fs } from 'fs';
import { Blog } from '../types/index'
import matter from 'gray-matter';

export async function loadBlog(key : string) : Promise<Blog | null> {
  try{
    if(!key.endsWith('.md')){
      key += '.md'
    }
     const fileContent = await fs.readFile(process.cwd() + '/files/blogs/' + `${key}`, 'utf8');
     const blogData = matter(fileContent);
     const blog : Blog = {
       key : blogData.data.key,
       title : blogData.data.title,
       description : blogData.data.description,
       content : blogData.content,
       date : blogData.data.date,
       tags : blogData.data.tags,
     }
     return blog
  }catch(e){
    console.error("Error retrieving blogs", e)
    return null
  }
}

export async function loadBlogs() : Promise<Blog[]> {
  try{
    const files = await fs.readdir(process.cwd() + '/files/blogs')
    const results: Blog[] = []
    for(let i = 0; i < files.length; i++){
      const file = files[i]
      if(path.extname(file) == ".md"){
        const blog = await loadBlog(file)
        if(blog){
           results.push(blog)
        }
      }
    }
    return results.sort((a, b) => {
      const [aDay, aMonth, aYear] = a.date.split('/').map(Number)
      const [bDay, bMonth, bYear] = b.date.split('/').map(Number)
      const aTime = Date.UTC(aYear, aMonth - 1, aDay)
      const bTime = Date.UTC(bYear, bMonth - 1, bDay)

      return bTime - aTime
    })
  }catch(e){
    console.error("Error retrieving blogs", e)
    return []
  }
}
