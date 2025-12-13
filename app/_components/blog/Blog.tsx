"use server"
import { promises as fs } from 'fs';
import { useRouter } from 'next/router';
import path from 'path'

interface Blog{
  key : string
  title : string
  description : string
  content : string
}

interface ListItemProps{
  blog : Blog
}
export const BlogListItem = async ({ blog } : ListItemProps) => {
  const openBlog = () => {
    window.open(`/blogs/${blog.key}`)

  }
  return (
    <div>
      <div className="font-bold flex-col py-[10px] cursor-pointer" 
        id="blog-title" onClick={() => openBlog()}>
        <p className="pb-[4px]">{blog.title}</p>
      </div>
        <div className="font-normal flex-col text-sm" id="blog-list">
          <p>
            <p className="text-gray-600">
            {blog.description}
            </p>
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
