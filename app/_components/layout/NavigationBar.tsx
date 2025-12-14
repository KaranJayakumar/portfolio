"use client"
import Link from "next/link"
import "../../styles/index.css"

export const NavigationBar = () => {
  return (
      <div className="flex flex-row justify-between mb-16 text-sm font-semibold">
        <div>
          <NavItem title="Karan Jayakumar" path="/"/>
        </div>
        <div className="flex flex-row h-fit text-sm underline underline-offset-4 gap-x-10">
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
  className?: string
}

const NavItem = ({title, path, className} : NavItemProps) => {
  return (
    <Link href={path} className={`rounded-md nav-item ${className}`}>{title}</Link>
  )
}
