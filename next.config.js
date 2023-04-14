/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'images.unsplash.com',
      'plus.unsplash.com',
    ],
  },
};

module.exports = nextConfig;
