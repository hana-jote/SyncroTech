declare module 'next/navigation' {
  export function useRouter(): {
    push: (href: string) => void
    replace: (href: string) => void
    prefetch: (href: string) => void
    back: () => void
    forward: () => void
    refresh: () => void
  }
}
