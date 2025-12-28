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
      <div className="flex md:flex-row flex-col md:gap-0 gap-4 justify-between">
        <div>
          <p className="md:font-normal font-semibold">{"Experience"}</p>
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
      onClick={openBlog}
      className={`flex justify-between gap-x-4 rounded-md px-2 py-1 -mx-2 text-sm transition ${
        blogKey
          ? "cursor-pointer group hover:bg-muted/50"
          : ""
      }`}
    >
      <div className="flex flex-col mr-26">
        <div
          className={`flex items-center gap-x-1 font-medium ${
            blogKey ? "group-hover:underline underline-offset-4" : ""
          }`}
        >
          {position}
          {blogKey && (
            <ExternalLinkIcon
              width={14}
              height={14}
              className="text-muted-foreground"
            />
          )}
        </div>

        <p
          className={`leading-relaxed ${
            blogKey
              ? "text-muted-foreground group-hover:text-foreground"
              : "text-muted-foreground"
          }`}
        >
          {description}
        </p>
      </div>

      <p className="text-muted-foreground whitespace-nowrap">
        {timeline}
      </p>
    </div>
  )
}

