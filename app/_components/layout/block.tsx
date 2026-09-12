import { ReactNode } from "react"

interface Props{
  title : string
  className? : string
  children : ReactNode
}

export const Block = ({children, title, className} : Props) => {
  return (
    <div className={`flex flex-col gap-4 my-24 ${className}`}>
      <div className="flex md:flex-row justify-between flex-col md:gap-0 gap-4">
        <div>
          <p className="md:font-normal font-semibold">{title}</p>
        </div>
        <div className="font-normal flex-col text-sm w-fit " id="about">
          <div className="md:w-[488px] w-fit">
          {children}
          </div>
        </div>
      </div>
    </div>
  )
}
