import { makeSource, defineDocumentType } from "@contentlayer/source-files"

const MdxPages = defineDocumentType(() => ({
  name: "MdxPages",
  filePathPattern: "**/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
    featuredImage: {
      type: "image",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/mdxpages/${doc._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  /* options */
  contentDirPath: "content",
  documentTypes: [MdxPages],
  disableImportAliasWarning: true,
})
