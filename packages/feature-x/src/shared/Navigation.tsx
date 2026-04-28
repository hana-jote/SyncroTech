'use client'

import Link from 'next/link'

export function Navigation() {
  return (
    <header className="border-b border-border/40 bg-background/80 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold text-foreground">
          TradeBridge
        </Link>
        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <Link href="/login" className="hover:text-foreground transition-colors">
            Login
          </Link>
        </nav>
      </div>
    </header>
  )
}
