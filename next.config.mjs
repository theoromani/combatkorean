/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // static export if we don't need SSR (Firebase is client-side)
  // output: 'export', 
};

export default nextConfig;
