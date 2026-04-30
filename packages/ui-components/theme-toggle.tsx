'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'

import { Button } from './button'

function ThemeToggle() {
  const [isDark, setIsDark] = React.useState(false)

  React.useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggleTheme = () => {
    const nextIsDark = !isDark
    document.documentElement.classList.toggle('dark', nextIsDark)
    setIsDark(nextIsDark)
  }

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </Button>
  )
}

export { ThemeToggle }
