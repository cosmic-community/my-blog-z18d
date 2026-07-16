import Link from 'next/link'
import type { Category } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface CategoryCardProps {
  category: Category
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const name = getMetafieldValue(category.metadata?.name) || category.title
  const description = getMetafieldValue(category.metadata?.description)

  return (
    <Link
      href={`/categories/${category.slug}`}
      className="block rounded-xl border border-border p-6 bg-background hover:border-accent hover:shadow-md transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="text-2xl">🏷️</span>
        <h2 className="text-lg font-bold text-foreground">{name}</h2>
      </div>
      {description && (
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
      )}
    </Link>
  )
}