import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  compress: true,
  
  // Permanent (301) redirects for renamed routes
  async redirects() {
    return [
      {
        source: "/prices",
        destination: "/live-gold-prices",
        permanent: true,
      },
      {
        source: "/where-to-buy",
        destination: "/where-to-buy-1-kilo-gold-bars",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
