import type { NextConfig } from "next";

const wpUrl = process.env.NEXT_PUBLIC_WORDPRESS_URL ?? "http://localhost";
const { hostname: wpHostname, protocol: wpProtocol } = new URL(wpUrl);

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: wpProtocol.replace(":", "") as "http" | "https",
        hostname: wpHostname,
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "fastly.picsum.photos",
      },
    ],
  },
};

export default nextConfig;
