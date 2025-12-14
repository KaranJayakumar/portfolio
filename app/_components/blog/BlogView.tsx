"use server"
import { promises as fs } from 'fs';
import path from 'path'
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

async function loadBlog(key : string) : Promise<Blog | undefined> {
  try{
    const files = await fs.readdir(process.cwd() + '/static/blogs')
    for(let i = 0; i < files.length; i++){
      const file = files[i]
      if(path.extname(file) == ".json"){
         const fileContent = await fs.readFile(process.cwd() + '/static/blogs/' + file, 'utf8');
         const blogData = JSON.parse(fileContent);
         console.log("comparing keys", key, blogData.key)
         if(blogData.key === key){
           const blog : Blog = {
             key : blogData.key,
             title : blogData.title,
             description : blogData.description,
             content : blogData.content,
           }
           return blog
         }
      }
    }
    throw Error("Blog not found")
  }catch(e){
    console.error("Error retrieving blogs", e)
  }
}

