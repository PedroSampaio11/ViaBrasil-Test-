import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "autocerto.com",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "autocerto.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
