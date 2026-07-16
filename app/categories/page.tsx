import { getCategories } from '@/lib/cosmic'
import CategoryCard from '@/components/CategoryCard'

export default async function CategoriesPage() {
  const categories = await getCategories()

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-2">
          Categories
        </h1>
        <p className="text-muted-foreground">Browse posts by topic.</p>
      </header>

      {categories.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground">
          <p>No categories found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      )}
    </div>
  )
}