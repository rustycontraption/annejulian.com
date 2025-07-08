import type { NextConfig } from "next";
// import { urlPrefix } from "./src/resources/content";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [new URL(`https://d2l2tjqqxralki.cloudfront.net/img/**`)],
  },
};

export default nextConfig;
