/** @type {import('next').NextConfig} */
import withSerwistInit from "@serwist/next"

const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
    ],
  },
}

const withSerwist = withSerwistInit({
  swSrc: "src/app/sw.ts",
  swDest: "public/sw.js",
})

export default withSerwist(nextConfig)
