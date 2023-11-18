/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.multiavatar.com',
      },
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com'
      }
    ]
  }
}

module.exports = nextConfig
