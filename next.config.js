/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'strapi-demo-assests.s3.us-east-1.amazonaws.com',
      },
      {
        protocol: 'http',
        hostname: '3.138.124.108',
        port: '1337',
        pathname: '/uploads/**',
      }
    ],
  },
}

module.exports = nextConfig
