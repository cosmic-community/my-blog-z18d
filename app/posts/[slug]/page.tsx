// app/posts/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPost, getMetafieldValue } from '@/lib/cosmic'

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  const title = getMetafieldValue(post.metadata?.title) || post.title
  const content = getMetafieldValue(post.metadata?.content)
  const featuredImage = post.metadata?.featured_image
  const author = post.metadata?.author
  const category = post.metadata?.category
  const tags = post.metadata?.tags

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <header className="mb-8">
        {category && (
          <Link
            href={`/categories/${category.slug}`}
            className="inline-block text-xs font-semibold uppercase tracking-wide text-accent mb-4 hover:underline"
          >
            {getMetafieldValue(category.metadata?.name) || category.title}
          </Link>
        )}
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-tight mb-6">
          {title}
        </h1>
        {author && (
          <Link
            href={`/authors/${author.slug}`}
            className="inline-flex items-center gap-3 group"
          >
            {author.metadata?.avatar ? (
              <img
                src={`${author.metadata.avatar.imgix_url}?w=96&h=96&fit=crop&auto=format,compress`}
                alt={getMetafieldValue(author.metadata?.name) || author.title}
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-xl">
                👤
              </div>
            )}
            <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
              {getMetafieldValue(author.metadata?.name) || author.title}
            </span>
          </Link>
        )}
      </header>

      {featuredImage && (
        <div className="rounded-2xl overflow-hidden bg-muted mb-10">
          <img
            src={`${featuredImage.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
            alt={title}
            width={800}
            height={450}
            className="w-full object-cover"
          />
        </div>
      )}

      {content && (
        <div
          className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground/90 prose-a:text-accent"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}

      {tags && tags.length > 0 && (
        <div className="mt-10 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground"
            >
              #{getMetafieldValue(tag)}
            </span>
          ))}
        </div>
      )}

      <div className="mt-12 pt-8 border-t border-border">
        <Link
          href="/"
          className="text-sm font-medium text-accent hover:underline"
        >
          ← Back to all posts
        </Link>
      </div>
    </article>
  )
}