"use client"
import Link from "next/link"
import "../../styles/index.css"
import { HoverCard, HoverCardContent, HoverCardPositioner, HoverCardTrigger } from "../ui/hover-card"
import { ContactCard } from "../ContactCard"
import { useRouter } from "next/navigation"


export const NavigationBar = () => {
  const router = useRouter()
  const onExperienceClick = () => {
    router.push("/#Experience")
  }
  return (
      <div className="flex flex-row justify-between mb-16 text-sm font-semibold">
        <div>
          <NavItem title="Karan Jayakumar" path="/"/>
        </div>
        <div className="flex flex-row h-fit text-sm underline-offset-4 gap-x-10">
          <NavItem title="Experience" path="/" onClick={onExperienceClick}/>
          <NavItem title="Blog" path="/blogs"/>
          <HoverCard>
            <HoverCardTrigger delay={50} className="">
                <div className={`rounded-md underline`}>{'Contact'}</div>
            </HoverCardTrigger>
            <HoverCardPositioner sideOffset={10} className='mr-6'>
              <HoverCardContent className="bg-white duration-[800]">
                <ContactCard/>
              </HoverCardContent>
            </HoverCardPositioner>
          </HoverCard>
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
        <p onClick={onClick} className={`rounded-md cursor-pointer nav-item underline ${className}`}>{title}</p>
      ) : (
        <Link href={path} className={`rounded-md nav-item underline ${className}`}>{title}</Link>
      )
  )
}
