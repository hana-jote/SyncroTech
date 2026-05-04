"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

import { useAuth } from "../context/AuthContext"
import { ThemeToggle } from "@repo/ui-components/theme-toggle"
import { Button } from "@repo/ui-components/button"
import { Input } from "@repo/ui-components/input"
import { Card } from "@repo/ui-components/card"
import { AlertCircle, Eye, EyeOff } from "lucide-react"

export default function SignupPage() {
  const router = useRouter()
  const { login, user, isLoading: authLoading } = useAuth()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [role, setRole] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState("")

  useEffect(() => {
    if (!authLoading && user) {
      router.push("/dashboard")
    }
  }, [user, authLoading, router])

  const checkStrength = (password: string) => {
    let score = 0

    if (password.length >= 6) score++
    if (password.length >= 10) score++
    if (/[A-Z]/.test(password)) score++
    if (/[0-9]/.test(password)) score++
    if (/[^A-Za-z0-9]/.test(password)) score++

    if (score <= 2) return "Weak"
    if (score <= 4) return "Medium"
    return "Strong"
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")

    if (!role) return setError("Please select a role")
    if (password !== confirmPassword)
      return setError("Passwords do not match")

    setIsLoading(true)

    try {
      await login(email, password)
      router.push("/dashboard")
    } catch (err) {
      setError("Failed to create account. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const roles = ["Retailer", "Factory", "Distributor", "Driver"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted flex flex-col">

      {/* Header */}
      <div className="relative flex items-center justify-center p-6">
        <div className="flex items-center gap-2">

          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">TB</span>
            </div>
            <h1 className="text-2xl font-bold text-foreground">TradeBridge</h1>
          </Link>

        </div>

        <div className="absolute right-6">
          <ThemeToggle />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">

          <Card className="border border-border bg-card p-8 shadow-lg">

            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Create Account
              </h2>
              <p className="text-muted-foreground">
                Join TradeBridge today
              </p>
            </div>

            {error && (
              <div className="mb-6 flex items-center gap-3 rounded-lg bg-destructive/10 p-3 border border-destructive/20">
                <AlertCircle className="h-5 w-5 text-destructive" />
                <p className="text-sm text-destructive">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 mb-6">

              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <Input value={name} onChange={(e) => setName(e.target.value)} />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>

              {/* Role */}
              <div>
                <label className="block text-sm font-medium mb-2">Select Role</label>

                <div className="grid grid-cols-2 gap-2">
                  {roles.map((r) => (
                    <button
                      type="button"
                      key={r}
                      onClick={() => setRole(r)}
                      className={`p-2 rounded-lg border text-sm ${
                        role === r
                          ? "bg-primary text-white border-primary"
                          : "bg-background border-border"
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium mb-2">Password</label>

                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      const value = e.target.value
                      setPassword(value)
                      setPasswordStrength(checkStrength(value))
                    }}
                    className="pr-10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                {password && (
                  <div className="mt-2">
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-300 ${
                          passwordStrength === "Weak"
                            ? "w-1/3 bg-red-500"
                            : passwordStrength === "Medium"
                            ? "w-2/3 bg-yellow-500"
                            : "w-full bg-green-500"
                        }`}
                      />
                    </div>
                    <p className="text-xs mt-1 text-muted-foreground">
                      Strength: <span className="font-semibold">{passwordStrength}</span>
                    </p>
                  </div>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium mb-2">Confirm Password</label>

                <div className="relative">
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="pr-10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  >
                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <Button disabled={isLoading} className="w-full">
                {isLoading ? "Creating account..." : "Sign Up"}
              </Button>

            </form>

            <p className="text-center text-sm text-muted-foreground mt-6">
              Already have an account?{" "}
              <Link href="/login" className="text-primary font-semibold hover:underline">
                Sign in
              </Link>
            </p>

          </Card>
        </div>
      </div>
    </div>
  )
}