'use client'

import * as React from 'react'

export type UserRole = 'retailer' | 'factory' | 'distributor' | 'driver' | 'admin'

export type AuthUser = {
  name: string
  email: string
  role: UserRole
  avatar: string
}

type AuthContextValue = {
  user: AuthUser | null
  isLoading: boolean
  login: (email: string, password?: string) => Promise<void>
  logout: () => void
  switchRole: (role: UserRole) => void
}

const AuthContext = React.createContext<AuthContextValue | undefined>(undefined)

const STORAGE_KEY = 'auth_user'

const demoUsers: Record<string, AuthUser> = {
  'retailer@tradebridge.com': {
    name: 'Retailer Demo',
    email: 'retailer@tradebridge.com',
    role: 'retailer',
    avatar: 'https://api.dicebear.com/9.x/initials/svg?seed=Retailer%20Demo',
  },
  'factory@tradebridge.com': {
    name: 'Factory Demo',
    email: 'factory@tradebridge.com',
    role: 'factory',
    avatar: 'https://api.dicebear.com/9.x/initials/svg?seed=Factory%20Demo',
  },
  'distributor@tradebridge.com': {
    name: 'Distributor Demo',
    email: 'distributor@tradebridge.com',
    role: 'distributor',
    avatar: 'https://api.dicebear.com/9.x/initials/svg?seed=Distributor%20Demo',
  },
  'driver@tradebridge.com': {
    name: 'Driver Demo',
    email: 'driver@tradebridge.com',
    role: 'driver',
    avatar: 'https://api.dicebear.com/9.x/initials/svg?seed=Driver%20Demo',
  },
}

function userFromEmail(email: string): AuthUser {
  return (
    demoUsers[email] ?? {
      name: email.split('@')[0] || 'TradeBridge User',
      email,
      role: 'retailer',
      avatar: `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(email)}`,
    }
  )
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<AuthUser | null>(null)
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setUser(JSON.parse(raw) as AuthUser)
    } catch {
      localStorage.removeItem(STORAGE_KEY)
    }

    setIsLoading(false)
  }, [])

  const persistUser = React.useCallback((nextUser: AuthUser | null) => {
    if (nextUser) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextUser))
    } else {
      localStorage.removeItem(STORAGE_KEY)
    }

    setUser(nextUser)
  }, [])

  const login = React.useCallback(
    async (email: string) => {
      persistUser(userFromEmail(email))
    },
    [persistUser],
  )

  const logout = React.useCallback(() => {
    persistUser(null)
  }, [persistUser])

  const switchRole = React.useCallback((role: UserRole) => {
    setUser((currentUser) => {
      if (!currentUser) return currentUser

      const nextUser = { ...currentUser, role }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextUser))
      return nextUser
    })
  }, [])

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout, switchRole }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = React.useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}
