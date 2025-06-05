// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'i87.servimg.com',
      'i19.servimg.com',
      'i51.servimg.com',       // ✅ <-- AGREGA ESTE
      'images.unsplash.com',
      'm.media-amazon.com',
    ],
  },
};

export default nextConfig;
