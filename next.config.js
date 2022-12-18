/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        pathname: '/glassvillage/heroes-villains/**'
      }
    ]
  },
}

module.exports = nextConfig
