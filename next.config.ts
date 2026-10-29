import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Let the site work when opened at the network address (not just localhost)
  allowedDevOrigins: ["192.168.1.208", "192.168.1.131"],
};

export default nextConfig;
