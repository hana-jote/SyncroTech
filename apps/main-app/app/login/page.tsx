'use client'

import { useAuth } from '@/app/context/auth'
import { useRouter } from 'next/navigation'
import type { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'
import { Button } from '../../../../packages/ui-components/button'
import { Card } from '../../../../packages/ui-components/card'
import { Input } from '../../../../packages/ui-components/input'

export default function LoginPage() {
  const { login } = useAuth()
  const router = useRouter()
  const [name, setName] = useState('Retail Manager')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const trimmed = name.trim() || 'User'
    login({ name: trimmed, email: 'user@example.com' })
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md p-8 border border-border shadow-sm">
        <h1 className="text-2xl font-bold text-foreground mb-2">Sign in</h1>
        <p className="text-sm text-muted-foreground mb-6">
          Enter your name to continue to the dashboard.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Display name
            </label>
            <Input
              id="name"
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
              className="bg-background border-input"
              autoComplete="name"
            />
          </div>
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            Continue
          </Button>
        </form>
      </Card>
    </div>
  )
}
