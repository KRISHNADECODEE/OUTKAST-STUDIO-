import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "the-masked-astrologer-premium.vercel.app",
      },
      {
        protocol: "https",
        hostname: "sutourandtravel.in",
      },
      {
        protocol: "https",
        hostname: "xtrm-gamma.vercel.app",
      },
      {
        protocol: "https",
        hostname: "om-ladies-tailor.vercel.app",
      },
    ],
  },
};

export default nextConfig;
