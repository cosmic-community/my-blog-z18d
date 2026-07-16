import Link from 'next/link'
import type { Author } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface AuthorCardProps {
  author: Author
}

export default function AuthorCard({ author }: AuthorCardProps) {
  const name = getMetafieldValue(author.metadata?.name) || author.title
  const bio = getMetafieldValue(author.metadata?.bio)
  const avatar = author.metadata?.avatar

  return (
    <Link
      href={`/authors/${author.slug}`}
      className="flex items-center gap-4 rounded-xl border border-border p-5 bg-background hover:border-accent hover:shadow-md transition-all duration-300"
    >
      {avatar ? (
        <img
          src={`${avatar.imgix_url}?w=128&h=128&fit=crop&auto=format,compress`}
          alt={name}
          width={64}
          height={64}
          className="w-16 h-16 rounded-full object-cover flex-shrink-0"
        />
      ) : (
        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-2xl flex-shrink-0">
          👤
        </div>
      )}
      <div className="min-w-0">
        <h2 className="text-lg font-bold text-foreground truncate">{name}</h2>
        {bio && <p className="text-sm text-muted-foreground line-clamp-2">{bio}</p>}
      </div>
    </Link>
  )
}