import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-24 text-center">
      <div className="text-6xl mb-6">🔍</div>
      <h1 className="text-3xl font-extrabold text-foreground mb-3">Page Not Found</h1>
      <p className="text-muted-foreground mb-8">
        Sorry, we couldn't find the page you're looking for.
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
      >
        Back to Home
      </Link>
    </div>
  )
}