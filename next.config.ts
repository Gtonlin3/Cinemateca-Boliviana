// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'i87.servimg.com',       // aún válido si lo usas en otros lugares
      'i19.servimg.com',       // ✅ este es el que necesitas para los estrenos
      'images.unsplash.com',
    ],
  },
};

export default nextConfig;
