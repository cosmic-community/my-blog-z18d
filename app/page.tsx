import Link from 'next/link'
import { getPosts, getMetafieldValue } from '@/lib/cosmic'
import PostGrid from '@/components/PostGrid'
import type { Post } from '@/types'

export default async function HomePage() {
  const posts = await getPosts()

  const featuredPost: Post | undefined = posts[0]
  const remainingPosts = posts.slice(1)

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-4">
          Welcome to My Blog
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Stories, ideas, and inspiration from our creative community.
        </p>
      </section>

      {/* Featured post */}
      {featuredPost && (
        <section className="mb-16">
          <Link
            href={`/posts/${featuredPost.slug}`}
            className="group grid md:grid-cols-2 gap-8 items-center rounded-2xl overflow-hidden border border-border bg-background hover:shadow-xl transition-shadow duration-300"
          >
            {featuredPost.metadata?.featured_image && (
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={`${featuredPost.metadata.featured_image.imgix_url}?w=1000&h=750&fit=crop&auto=format,compress`}
                  alt={getMetafieldValue(featuredPost.metadata?.title) || featuredPost.title}
                  width={500}
                  height={375}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}
            <div className="p-6 md:p-8">
              {featuredPost.metadata?.category && (
                <span className="inline-block text-xs font-semibold uppercase tracking-wide text-accent mb-3">
                  {getMetafieldValue(featuredPost.metadata.category.metadata?.name) ||
                    featuredPost.metadata.category.title}
                </span>
              )}
              <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight group-hover:text-accent transition-colors">
                {getMetafieldValue(featuredPost.metadata?.title) || featuredPost.title}
              </h2>
              {featuredPost.metadata?.author && (
                <p className="mt-4 text-sm text-muted-foreground">
                  By{' '}
                  {getMetafieldValue(featuredPost.metadata.author.metadata?.name) ||
                    featuredPost.metadata.author.title}
                </p>
              )}
            </div>
          </Link>
        </section>
      )}

      {/* Latest posts */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6">Latest Posts</h2>
        <PostGrid posts={remainingPosts} emptyMessage="No more posts to show." />
      </section>
    </div>
  )
}