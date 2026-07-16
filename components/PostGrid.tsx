import type { Post } from '@/types'
import PostCard from '@/components/PostCard'

interface PostGridProps {
  posts: Post[]
  emptyMessage?: string
}

export default function PostGrid({ posts, emptyMessage = 'No posts found.' }: PostGridProps) {
  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-16 text-muted-foreground">
        <p>{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}