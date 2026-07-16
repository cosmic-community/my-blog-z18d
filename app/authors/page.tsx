import { getAuthors } from '@/lib/cosmic'
import AuthorCard from '@/components/AuthorCard'

export default async function AuthorsPage() {
  const authors = await getAuthors()

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-2">
          Authors
        </h1>
        <p className="text-muted-foreground">Meet the people behind the stories.</p>
      </header>

      {authors.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground">
          <p>No authors found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {authors.map((author) => (
            <AuthorCard key={author.id} author={author} />
          ))}
        </div>
      )}
    </div>
  )
}