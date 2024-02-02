import { allBlogs } from "contentlayer/generated"
import HomeCoverSection from "@/components/Home/HomeCoverSection"
import Image from "next/image"
import RenderMdx from "@/components/RenderMdx"

export default function BlogPage({ params }) {
  console.log(allBlogs)

  const log = allBlogs.map((blog) => {
    console.log("path: --------- ", blog._raw.flattenedPath)
    return blog._raw.flattenedPath
  })

  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug)

  if (!blog) {
    return (
      <div>
        <h1>404 - dgw blog Page Not Found</h1>
      </div>
    )
  }

  return (
    <>
      {/* <HomeCoverSection blogs={allBlogs} /> */}

      <article>
        <div className="mb-8 text-center relative w-full h-[70vh] bg-dark">
          <div
            className="w-full z-10 flex flex-col items-center justify-center \
        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <h1
              className="inline-block mt-6 font-semibold capitalize text-light text-5xl leading-normal
            relative w-5/6"
            >
              {blog.title}
            </h1>
          </div>

          <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60">
            <Image
              src={blog.featuredImage.filePath.replace("../public", "")}
              alt={blog.title}
              placeholder="blur"
              blurDataURL={blog.featuredImage.blurhashDataUrl}
              width={blog.featuredImage.width}
              height={blog.featuredImage.height}
              className="aspect-square w-full h-full object-cover object-center"
            />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-16 mt-8 px-10">
          <RenderMdx blog={blog} />
        </div>
      </article>
    </>
  )
}
