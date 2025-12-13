import { ReactNode } from "react"

interface LayoutProps{
  children : ReactNode
}

export const ExperienceLayout = ({children} : LayoutProps) => {
  return (
    <div className="" id="about">
      {children}
    </div>
  )
}

export const ExperienceItem = ({children} : LayoutProps) => {
  return (
    <div className="font-normal flex-col text-sm" id="about">
      {children}
    </div>
  )
}

