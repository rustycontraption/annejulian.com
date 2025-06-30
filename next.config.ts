import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [new URL('https://static.annejulian.net/static/img/**')],
  },
};

export default nextConfig;
