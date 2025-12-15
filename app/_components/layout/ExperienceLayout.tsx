"use client"
import { useRouter } from "next/navigation"
import { ReactNode } from "react"

interface LayoutProps{
  children : ReactNode
}

export const ExperienceLayout = ({children} : LayoutProps) => {
  return (
    <div className="flex flex-col gap-4 my-24">
      <div className="flex flex-row justify-between">
        <div>
          <p>{"Experience"}</p>
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}

interface ItemProps {
  position : string
  description : string
  timeline : string
  blogKey? : string
}
export const ExperienceItem = ({position, description, timeline, blogKey} : ItemProps) => {
  const router = useRouter();
  const openBlog = () => {
    if(blogKey){
      router.push(`/blogs/${blogKey}`)
    }
    return
  }
  return (
    <div className="flex flex-row justify-between gap-x-2 mb-4 text-sm">
      <div className="flex flex-col mr-26">
        <p className={`font-semibold ${blogKey? 'cursor-pointer' : ''}`} 
          onClick={() => {openBlog()}}>
          {position}
        </p>
        <p className={`${blogKey? 'cursor-pointer' : ''}`} 
          onClick={() => {openBlog()}}>
          {description}
        </p>
      </div>
      <div>
        <p>
          {timeline}
        </p>
      </div>
    </div>
  )
}
