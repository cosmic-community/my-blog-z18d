import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur sticky top-0 z-40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl">📝</span>
          <span className="text-xl font-extrabold tracking-tight text-foreground group-hover:text-accent transition-colors">
            My Blog
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </Link>
          <Link
            href="/categories"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Categories
          </Link>
          <Link
            href="/authors"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Authors
          </Link>
        </nav>
      </div>
    </header>
  )
}