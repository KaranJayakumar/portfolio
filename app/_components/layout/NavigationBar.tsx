"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const NavigationBar = () => {
  return (
      <div className="flex flex-row justify-between mb-16 ">
        <div>
          <NavItem title="Karan Jayakumar" path="/"/>
        </div>
        <div className="flex flex-row gap-8">
          <NavItem title="Experience" path="/"/>
          <NavItem title="Blog" path="/blogs"/>
          <NavItem title="Contact" path="/"/>
        </div>
      </div>
  )
}

interface NavItemProps {
  title : string
  path : string
}

const NavItem = ({title, path} : NavItemProps) => {
  return (
    <Link href={path}>{title}</Link>
  )
}
