/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['@neondatabase/serverless'],
  images: {
    domains: ['avatars.githubusercontent.com', 'lh3.googleusercontent.com'],
    formats: ['image/webp', 'image/avif']
  },
  typescript: {
    ignoreBuildErrors: false
  },
  eslint: {
    ignoreDuringBuilds: false
  },
  output: 'standalone'
}

export default nextConfig
