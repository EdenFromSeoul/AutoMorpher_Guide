import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH;
const basePath = (configuredBasePath ?? (isProduction ? "/AutoMorpher_Guide" : ""))
  .trim()
  .replace(/\/$/, "");

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;