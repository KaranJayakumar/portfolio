import Image from "next/image"

export const NavigationBar = () => {
  return (
    <div className="flex border justify-between">
    <div>
    Home
    </div>
    <div className="flex gap-4 pr-4">
      <div>
      About
      </div>
      <div>
      Work
      </div>
      <div className="justify-items-center align-middle flex">
      <img src="/icons/download.svg" alt="hello" width={14} height={14}/>
      </div>
    </div>
    </div>
  )
}
