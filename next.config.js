/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  env: {
    assetPrefix: isProd ? "/my-app/" : ""
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  },
}

module.exports = nextConfig
