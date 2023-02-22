import { defineDocumentType, makeSource, type ComputedFields, } from 'contentlayer/source-files'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math'

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
  },
};

export const Post = defineDocumentType(() => ({
  name: 'Post',
  contentType: 'mdx',
  filePathPattern: `posts/**/*.mdx`,
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'string',
      description: 'The date of the post',
      required: true,
    },
    description: {
        type: 'string',
        required: true,
    },
    thumbnail: {
        type: 'string',
        required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/${post._raw.flattenedPath.split('/').slice(1).join('/')}`,
    },
    ...computedFields,
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
  mdx: { 
    rehypePlugins: [rehypeKatex],
    remarkPlugins: [remarkMath, remarkGfm],
  }
})