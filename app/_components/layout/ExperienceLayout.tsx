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
}
export const ExperienceItem = ({position, description, timeline} : ItemProps) => {
  return (
    <div className="flex flex-row gap-2 justify-between">
      <div className="flex flex-col">
        <p className="font-semibold">
          {position}
        </p>
        <p>
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
