import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'i87.servimg.com' },
      { protocol: 'https', hostname: 'i19.servimg.com' },
      { protocol: 'https', hostname: 'i51.servimg.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'm.media-amazon.com' },
      { protocol: 'https', hostname: 'i.ytimg.com' },
      { protocol: 'https', hostname: 'e00-xlk-ue-marca.uecdn.es' },
      { protocol: 'https', hostname: 'cdn.marvel.com' },
      { protocol: 'https', hostname: 'statics.cinemex.com' },
      { protocol: 'https', hostname: 'pics.filmaffinity.com' },
      { protocol: 'https', hostname: 'harkinsposters.imgix.net' },
    ],
  },
};

export default nextConfig;
