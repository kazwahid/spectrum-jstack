/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['@neondatabase/serverless'],
  images: {
    domains: ['avatars.githubusercontent.com', 'lh3.googleusercontent.com']
  }
}

export default nextConfig
