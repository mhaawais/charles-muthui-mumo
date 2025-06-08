/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',     // for App Router users (Next.js 13+)
  trailingSlash: true,
  images: {
    unoptimized: true, // required for `next/image` to work with static export
  },
};

export default nextConfig;
