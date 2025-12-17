"use client"
import { useRouter } from "next/navigation"
import { ReactNode } from "react"

interface LayoutProps{
  children : ReactNode
}
import { ExternalLinkIcon } from "lucide-react"

export const ExperienceLayout = ({children} : LayoutProps) => {
  return (
    <div className="flex flex-col gap-4 my-24" id="Experience">
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
export const ExperienceItem = ({
  position,
  description,
  timeline,
  blogKey
}: ItemProps) => {
  const router = useRouter()

  const openBlog = () => {
    if (blogKey) {
      router.push(`/blogs/${blogKey}`)
    }
  }

  return (
    <div
      className={`flex flex-row justify-between gap-x-2 mb-4 text-sm ${
        blogKey ? "cursor-pointer group" : ""
      }`}
      onClick={openBlog}
    >
      <div className="flex flex-col mr-26">
        <div
          className={`font-semibold items-center gap-x-2 flex flex-row${
            blogKey ? "group-hover:underline" : ""
          }`}
        >
          {position}
          {blogKey && (
            <ExternalLinkIcon width={14} height={14} className='pb-0.5'/>
          )}
        </div>
        <p
          className={`text-muted-foreground ${
            blogKey ? "group-hover:text-foreground" : ""
          }`}
        >
          {description}
        </p>
      </div>

      <div className="text-muted-foreground">
        <p>{timeline}</p>
      </div>
    </div>
  )
}

