'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from 'feature-x'
import { Button } from '@repo/ui-components/button'
import { Card } from '@repo/ui-components/card'
import { Input } from '@repo/ui-components/input'
import { ThemeToggle } from '@repo/ui-components/theme-toggle'
import { AlertCircle } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const { login, user, isLoading: authLoading } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // Redirect to dashboard if already logged in
  useEffect(() => {
    if (!authLoading && user) {
      router.push('/dashboard')
    }
  }, [user, authLoading, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      await login(email, password)
      router.push('/dashboard')
    } catch (err) {
      setError('Failed to login. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const demoUsers = [
    { email: 'retailer@tradebridge.com', password: 'demo', role: 'Retailer' },
    { email: 'factory@tradebridge.com', password: 'demo', role: 'Factory' },
    { email: 'distributor@tradebridge.com', password: 'demo', role: 'Distributor' },
    { email: 'driver@tradebridge.com', password: 'demo', role: 'Driver' },
  ]

  const handleDemoLogin = async (demoEmail: string) => {
    setEmail(demoEmail)
    setError('')
    setIsLoading(true)

    try {
      await login(demoEmail, 'demo')
      router.push('/dashboard')
    } catch (err) {
      setError('Failed to login. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center p-6">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">TB</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground">TradeBridge</h1>
        </div>
        <ThemeToggle />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Login Card */}
          <Card className="border border-border bg-card p-8 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">Welcome Back</h2>
              <p className="text-muted-foreground">
                Smart Supply-Demand Management System
              </p>
            </div>

            {error && (
              <div className="mb-6 flex items-center gap-3 rounded-lg bg-destructive/10 p-3 border border-destructive/20">
                <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0" />
                <p className="text-sm text-destructive">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-background border-input"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Password
                </label>
                <Input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-background border-input"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-10"
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>

            {/* Demo Users */}
            <div className="border-t border-border pt-6">
              <p className="text-xs font-medium text-muted-foreground text-center mb-3 uppercase">
                Try Demo Accounts
              </p>
              <div className="space-y-2">
                {demoUsers.map((user) => (
                  <button
                    key={user.email}
                    onClick={() => handleDemoLogin(user.email)}
                    disabled={isLoading}
                    className="w-full px-4 py-3 text-sm font-medium rounded-lg border border-border bg-background hover:bg-muted transition-colors text-foreground disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {user.role}
                  </button>
                ))}
              </div>
            </div>

            {/* Signup Link */}
            <p className="text-center text-sm text-muted-foreground mt-6">
              Don&apos;t have an account?{' '}
              <a href="/signup" className="text-primary font-semibold hover:underline">
                Sign up
              </a>
            </p>
          </Card>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {[
              { title: 'Real-time Tracking', desc: 'Monitor orders in real time' },
              { title: 'Smart Matching', desc: 'AI-powered supplier matching' },
              { title: 'Secure Payments', desc: 'Multiple payment options' },
              { title: '24/7 Support', desc: 'Round-the-clock assistance' },
            ].map((feature) => (
              <div
                key={feature.title}
                className="p-4 rounded-lg bg-card border border-border/50 backdrop-blur-sm"
              >
                <h3 className="font-semibold text-foreground text-sm mb-1">
                  {feature.title}
                </h3>
                <p className="text-xs text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
