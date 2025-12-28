"use client"
import Link from "next/link"
import "../../styles/index.css"
import { HoverCard, HoverCardContent, HoverCardPositioner, HoverCardTrigger } from "../ui/hover-card"
import { ContactCard } from "../ContactCard"
import { useRouter } from "next/navigation"
import { Popover } from "@base-ui/react"


export const NavigationBar = () => {
  const router = useRouter()
  const onExperienceClick = () => {
    router.push("/#Experience")
  }
  return (
      <div className="flex flex-row justify-between mb-16 text-sm font-semibold items-center">
        <div>
          <NavItem title="Karan Jayakumar" path="/"/>
        </div>
        <div className="flex flex-row h-fit text-sm gap-x-10">
          <NavItem title="Experience" path="/" onClick={onExperienceClick}/>
          <NavItem title="Blog" path="/blogs"/>
<Popover.Root>
            <Popover.Trigger className="rounded-md underline underline-offset-4 cursor-pointer nav-item">
              Contact
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Backdrop className="bg-black/20 backdrop-blur-sm"/>
              <Popover.Positioner>
                <Popover.Popup className="bg-white rounded-lg shadow-lg p-4 border border-gray-200">
                  <ContactCard/>
                </Popover.Popup>
              </Popover.Positioner>
            </Popover.Portal>
          </Popover.Root>
        </div>
      </div>
  )
}

interface NavItemProps {
  title : string
  path : string
  className?: string
  onClick? : () => void
}

const NavItem = ({title, path, className, onClick} : NavItemProps) => {
  return (
      onClick ? (
        <p onClick={onClick} className={`rounded-md cursor-pointer nav-item underline underline-offset-4 ${className}`}>{title}</p>
      ) : (
        <Link href={path} className={`rounded-md nav-item underline underline-offset-4 ${className}`}>{title}</Link>
      )
  )
}
