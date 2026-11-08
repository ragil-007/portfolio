/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Compress output for smaller transfer sizes on Vercel
  compress: true,
  // PoweredByHeader adds unnecessary bytes
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Compiler optimizations
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
