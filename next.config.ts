import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProduction ? "/AutoMorpher_Guide" : "",
  assetPrefix: isProduction ? "/AutoMorpher_Guide" : "",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;