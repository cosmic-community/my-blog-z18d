// app/authors/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAuthor, getPostsByAuthor, getMetafieldValue } from '@/lib/cosmic'
import PostGrid from '@/components/PostGrid'

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const author = await getAuthor(slug)

  if (!author) {
    notFound()
  }

  const posts = await getPostsByAuthor(author.id)
  const name = getMetafieldValue(author.metadata?.name) || author.title
  const bio = getMetafieldValue(author.metadata?.bio)
  const email = getMetafieldValue(author.metadata?.email)
  const avatar = author.metadata?.avatar

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <header className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-12 text-center sm:text-left">
        {avatar ? (
          <img
            src={`${avatar.imgix_url}?w=240&h=240&fit=crop&auto=format,compress`}
            alt={name}
            width={120}
            height={120}
            className="w-28 h-28 rounded-full object-cover flex-shrink-0"
          />
        ) : (
          <div className="w-28 h-28 rounded-full bg-muted flex items-center justify-center text-4xl flex-shrink-0">
            👤
          </div>
        )}
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-2">
            {name}
          </h1>
          {bio && <p className="text-muted-foreground max-w-2xl mb-2">{bio}</p>}
          {email && (
            <a
              href={`mailto:${email}`}
              className="text-sm font-medium text-accent hover:underline"
            >
              {email}
            </a>
          )}
        </div>
      </header>

      <h2 className="text-2xl font-bold text-foreground mb-6">
        Posts by {name}
      </h2>
      <PostGrid posts={posts} emptyMessage="This author hasn't published any posts yet." />

      <div className="mt-12 pt-8 border-t border-border">
        <Link href="/authors" className="text-sm font-medium text-accent hover:underline">
          ← All authors
        </Link>
      </div>
    </div>
  )
}