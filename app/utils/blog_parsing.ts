import path from 'path'
import { Blog } from '../types/index'
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

