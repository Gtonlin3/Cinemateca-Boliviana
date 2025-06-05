// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'i87.servimg.com',       // para los pósters de tu MockAPI
      'images.unsplash.com',   // para las portadas de ejemplo de Inicio
    ],
  },
};

export default nextConfig;
