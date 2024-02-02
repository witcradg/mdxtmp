import { makeSource, defineDocumentType } from "@contentlayer/source-files"

const Blog = defineDocumentType(() => ({
  name: "Blog",
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
      resolve: (doc) => `/blogs/${doc._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  /* options */
  contentDirPath: "content",
  documentTypes: [Blog],
  disableImportAliasWarning: true,
})
