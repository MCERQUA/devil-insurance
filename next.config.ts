import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const nextConfig: NextConfig = {
  output: "export",
  outputFileTracingRoot: dirname(fileURLToPath(import.meta.url)),
  allowedDevOrigins: ["*.jam-bot.com"],
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
};

export default nextConfig;
