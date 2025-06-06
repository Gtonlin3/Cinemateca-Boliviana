import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'i87.servimg.com',
      'i19.servimg.com',
      'i51.servimg.com',
      'images.unsplash.com',
      'm.media-amazon.com',
      'i.ytimg.com', // ✅ AGREGADO AQUÍ
    ],
  },
};

export default nextConfig;
