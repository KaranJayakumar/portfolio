import { BlogView } from "@/app/_components/blog/BlogView"

export default async function Page({
  params,
}: {
  params: Promise<{ key: string }>
}) {
  const { key } = await params
  return (
    <BlogView blogKey={key}/>
  )
}
