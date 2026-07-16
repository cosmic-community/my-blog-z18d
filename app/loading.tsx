export default function Loading() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-24 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 text-muted-foreground">
        <div className="w-10 h-10 border-4 border-muted border-t-accent rounded-full animate-spin" />
        <p className="text-sm">Loading…</p>
      </div>
    </div>
  )
}