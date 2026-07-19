import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  allowedDevOrigins: ["*.jam-bot.com"],
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
};

export default nextConfig;
