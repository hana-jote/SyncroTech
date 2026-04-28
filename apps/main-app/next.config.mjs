/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['ui-components', 'feature-x', 'feature-y', 'utils'],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
