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
      'instagram.facc6-1.fna.fbcdn.net',
    ],
  },
};

module.exports = nextConfig;
