/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images2.imgbox.com",
        protocol: "https",
        pathname: "/**/*",
        port: "",
      },
    ],
  },
}

module.exports = nextConfig
