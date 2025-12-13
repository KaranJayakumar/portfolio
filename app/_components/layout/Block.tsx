import { ReactNode } from "react"

interface Props{
  title : string
  children : ReactNode
}

export const Block = ({children, title} : Props) => {
  return (
    <div className="flex flex-col gap-4 my-24">
      <div className="flex flex-row justify-between">
        <div>
          <p>{title}</p>
        </div>
        <div className="font-normal flex-col text-sm w-fit" id="about">
          <div className="w-[488px]">
          {children}
          </div>
        </div>
      </div>
    </div>
  )
}
