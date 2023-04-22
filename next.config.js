/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  rewrites: async () => [
    {
      source: '/api/auth/:path*',
      destination: `${process.env.SERVER_URL}/:path*`,
    },
  ],
  images: {
    domains: [
      'res.cloudinary.com',
      'lh3.googleusercontent.com',
      'pictures-ghana.jijistatic.com',
      'images.unsplash.com',
      'plus.unsplash.com',
      'instagram.facc6-1.fna.fbcdn.net',
    ],
  },
};

module.exports = nextConfig;
