/** @type {import('next').NextConfig} */
import withPWA from "next-pwa"

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
    ],
  },
}

const pwaConfig = withPWA({
  dest: "public",
  cacheOnFrontEndNav: true,
  reloadOnOnline: true,
  disable: process.env.NODE_ENV === "development",
})

export default pwaConfig(nextConfig)
