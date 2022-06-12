/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  eslint: {
    dirs: ['src'],
  },
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.tsx?$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
  images: {
    domains: ['media.ovo.id', 'storage.googleapis.com'],
  },
}

module.exports = nextConfig
