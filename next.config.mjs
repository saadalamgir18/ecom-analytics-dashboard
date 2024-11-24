/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ih1.redbubble.net",
        // port: "",
        // pathname: "/account123/**",
      },
      {
        protocol: "https",
        hostname: "ipfs.io",
        // port: "",
        // pathname: "/account123/**",
      },
      {
        protocol: "https",
        hostname: "cloudflare-ipfs.com",
        // port: "",
        // pathname: "/account123/**",
      },
    ],
  },
};

export default nextConfig;
