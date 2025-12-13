"use server"
import { promises as fs } from 'fs';
import path from 'path'

interface Blog{
  title : string
  description : string
  content : string
}

interface ListItemProps{
  title : string
  description : string
}
export const BlogListItem = async ({title, description} : ListItemProps) => {
  return (
    <div>
      <div className="font-bold flex-col py-[10px]" id="blog-title">
        <p className="pb-[4px]">{title}</p>
      </div>
        <div className="font-normal flex-col text-sm" id="blog-list">
          <p>
            <a href="#" className="underline hover:text-gray-600">
            {description}
            </a>
          </p>
        </div>
    </div>
  )
}

export const BlogList = async () => {
  const blogs = await loadBlogs()
  return (
    blogs.map((blog, index) => {
        return (
          <BlogListItem key={index} title ={blog.title} description={blog.description} />
        )
      }
    )
  )
}

async function loadBlogs() : Promise<Blog[]> {
  try{
    const files = await fs.readdir(process.cwd() + '/app/static/blogs')
    const results = []
    for(let i = 0; i < files.length; i++){
      const file = files[i]
      if(path.extname(file) == ".json"){
         const fileContent = await fs.readFile(process.cwd() + '/app/static/blogs/' + file, 'utf8');
         const blogData = JSON.parse(fileContent);
         const blog : Blog = {
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
