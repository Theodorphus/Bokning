import type { NextConfig } from "next";

const wpUrl = process.env.NEXT_PUBLIC_WORDPRESS_URL ?? "http://localhost";
const { hostname, protocol } = new URL(wpUrl);

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: protocol.replace(":", "") as "http" | "https",
        hostname,
      },
    ],
  },
};

export default nextConfig;
