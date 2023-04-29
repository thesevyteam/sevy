/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  rewrites: async () => [
    {
      source: '/api/auth/:path*',
      destination: `${process.env.AUTH_SERVER_URL}/:path*`,
    },
    {
      source: '/api/lbs/:path*',
      destination: `${process.env.LOCATION_BASED_SERVER_URL}/:path*`,
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
      'ui-avatars.com',
    ],
  },
};

module.exports = nextConfig;
