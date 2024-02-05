import { sortPages as sortPages } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

const HomeCoverSection = ({ mdxPages }) => {
  const sortedPages = sortPages(mdxPages)
  const mdxPage = sortedPages[0]

  return (
    <div className="w-full inline-block">
      <article className="flex flex-col items-start justify-end mx-10 relative h-[85vh]">
        <div
          className="absolute top-0 left-0 bottom-0 right-0 h-full"
          // bg-gradient-to-b from-tranparent from-0% to-dark rounded-3xl z-0"
        />
        <Image
          src={mdxPage.featuredImage.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={mdxPage.featuredImage.blurhashDataUrl}
          alt={mdxPage.title}
          fill
          className="w-full h-full object-center object-cover rounded-3xl -z-10"
        />
        <div className="w-3/4 p-16 flex flex-col items-start jusify-center z-0 text-light">
          <h1 className="text-4xl font-bold capitalize">
            <span
              className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px]
            hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500"
            >
              {mdxPage.title}
            </span>
          </h1>
          <p className="inline-block mt-4 text-xl font-">Placeholder</p>
        </div>
      </article>
    </div>
  )
}

export default HomeCoverSection
