// app/categories/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCategory, getPostsByCategory, getMetafieldValue } from '@/lib/cosmic'
import PostGrid from '@/components/PostGrid'

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const category = await getCategory(slug)

  if (!category) {
    notFound()
  }

  const posts = await getPostsByCategory(category.id)
  const name = getMetafieldValue(category.metadata?.name) || category.title
  const description = getMetafieldValue(category.metadata?.description)

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">🏷️</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            {name}
          </h1>
        </div>
        {description && <p className="text-muted-foreground">{description}</p>}
      </header>

      <PostGrid posts={posts} emptyMessage="No posts in this category yet." />

      <div className="mt-12 pt-8 border-t border-border">
        <Link href="/categories" className="text-sm font-medium text-accent hover:underline">
          ← All categories
        </Link>
      </div>
    </div>
  )
}