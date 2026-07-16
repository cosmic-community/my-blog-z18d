import Link from 'next/link'
import type { Post } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  const featuredImage = post.metadata?.featured_image
  const category = post.metadata?.category
  const author = post.metadata?.author
  const displayTitle = getMetafieldValue(post.metadata?.title) || post.title

  return (
    <article className="group rounded-xl overflow-hidden border border-border bg-background hover:shadow-lg transition-shadow duration-300">
      <Link href={`/posts/${post.slug}`} className="block">
        {featuredImage && (
          <div className="aspect-[16/9] overflow-hidden bg-muted">
            <img
              src={`${featuredImage.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
              alt={displayTitle}
              width={400}
              height={225}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        <div className="p-5">
          {category && (
            <span className="inline-block text-xs font-semibold uppercase tracking-wide text-accent mb-2">
              {getMetafieldValue(category.metadata?.name) || category.title}
            </span>
          )}
          <h2 className="text-lg font-bold text-foreground leading-snug group-hover:text-accent transition-colors">
            {displayTitle}
          </h2>
          {author && (
            <p className="mt-3 text-sm text-muted-foreground">
              By {getMetafieldValue(author.metadata?.name) || author.title}
            </p>
          )}
        </div>
      </Link>
    </article>
  )
}