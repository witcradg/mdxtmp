"use client"

import { useMDXComponent } from "next-contentlayer/hooks"
import Image from "next/image"

const mdxComponents = {
  Image,
}

const RenderMdx = ({ blog }) => {
  const MDXContent = useMDXComponent(blog.body.code)
  return (
    <div className="font-in">
      <MDXContent components={mdxComponents} />
    </div>
  )
}

export default RenderMdx
