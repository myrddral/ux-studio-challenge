/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ux-studio-challenge-portraits.s3.eu-central-1.amazonaws.com',
        port: '',
        pathname: '/',
      },
    ],
    minimumCacheTTL: 1800,
  },
  experimental: {
    serverComponentsExternalPackages: ['@aws-sdk/client-s3', '@aws-sdk/s3-request-presigner'],
  },
}

export default nextConfig
