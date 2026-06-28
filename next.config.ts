import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    formats: ["image/avif", "image/webp"]
  },
  async redirects() {
    return [
      {
        source: "/solutions/for-injection-molders",
        destination: "/solutions/injection-molders",
        permanent: true
      },
      {
        source: "/solutions/for-oem-product-companies",
        destination: "/solutions/oem-product-companies",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
