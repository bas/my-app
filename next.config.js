/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  //assetPrefix: isProd ? "/my-app/" : "",
  assetPrefix: "/my-app/",
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  },
}

module.exports = nextConfig
