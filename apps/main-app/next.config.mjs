/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@repo/ui-components', '@repo/utils', 'feature-x', 'feature-y'],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
