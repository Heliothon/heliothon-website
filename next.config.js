/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // basePath: '/heliothon-website',
  // assetPrefix: '/heliothon-website/',
  // trailingSlash: true,
};

module.exports = nextConfig;
