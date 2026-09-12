import { cn } from "@/app/lib/utils"
import Link from "next/link"

interface Props{
  ctaText : string
  link : string
  className? : string
}
export const TextLink = (props : Props) => {
  const { ctaText, link, className} = props
  return (
    <Link href={link} className={cn("underline hover:text-gray-600", className)}>
      {ctaText}
    </Link>
  )
}

