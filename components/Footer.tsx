export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 text-center text-sm text-muted-foreground">
        <p>© {year} My Blog. Crafted with care.</p>
      </div>
    </footer>
  )
}