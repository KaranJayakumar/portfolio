import path from 'path'
import { promises as fs } from 'fs';
import { Blog } from '../types/index'

export async function loadBlog(key : string) : Promise<Blog | null> {
  try{
    if(!key.endsWith('.md')){
      key += '.md'
    }
     const fileContent = await fs.readFile(process.cwd() + '/files/blogs/' + `${key}`, 'utf8');
     const blogData = JSON.parse(fileContent);
     if(blogData.key === key){
       const blog : Blog = {
         key : blogData.key,
         title : blogData.title,
         description : blogData.description,
         content : blogData.content,
       }
       return blog
     }
     return null
  }catch(e){
    console.error("Error retrieving blogs", e)
    return null
  }
}

export async function loadBlogs() : Promise<Blog[]> {
  try{
    const files = await fs.readdir(process.cwd() + '/static/blogs')
    const results = []
    for(let i = 0; i < files.length; i++){
      const file = files[i]
      if(path.extname(file) == ".json"){
        if(loadBlog(file) != null){
           results.push(loadBlog(file))
        }
      }
    }
    return results
  }catch(e){
    console.error("Error retrieving blogs", e)
    return []
  }
}
