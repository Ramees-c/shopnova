import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.dummyjson.com", pathname: "/**" },
      { protocol: "https", hostname: "dummyjson.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;
