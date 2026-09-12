import { BlogView } from "@/app/_components/blog/blog-view"

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
