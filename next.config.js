/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  assetPrefix: isProd ? "/my-app/" : "",
  publicRuntimeConfig: { 
    assetPrefix: process.env.ASSET_PREFIX || '' 
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  },
}

module.exports = nextConfig
