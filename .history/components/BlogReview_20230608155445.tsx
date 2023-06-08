import {BlogPost} from '@/types/blog'
import React from 'react'
import BlogHeader from './BlogHeader'

const BlogReview: React.FC<BlogPost> = (props) => {
  const {title, bodyText, createdAt, author, tags} = props
  const previewText: string = bodyText?.slice(0, 100) + '...'
  return (
    <section>
      <BlogHeader createdAt={createdAt} author={author} />
      <h2 className="font-bold">{title}</h2>
      <p className="mt-2">{previewText}</p>
      <div className="flex gap-3">
        {tags?.map((tag, inx) => {
          return (
            <p
              className="label"
              key={inx}
            >
              {tag}
            </p>
          )
        })}
      </div>
    </section>
  )
}

export default BlogReview
