export function AnimatedClouds() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-10 h-40 w-40 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute right-12 top-24 h-32 w-32 rounded-full bg-secondary/10 blur-3xl" />
      <div className="absolute bottom-8 left-12 h-28 w-28 rounded-full bg-accent/10 blur-3xl" />
    </div>
  )
}
