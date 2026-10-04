import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    formats: ["image/avif", "image/webp"]
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "Content-Security-Policy", value: "base-uri 'self'; form-action 'self'; frame-ancestors 'self'; object-src 'none'" }
        ]
      }
    ];
  },
  async redirects() {
    return [
      {
        source: "/service/mould-making",
        destination: "/services/injection-mold-manufacturing",
        permanent: true
      },
      {
        source: "/service/mold-making",
        destination: "/services/injection-mold-manufacturing",
        permanent: true
      },
      {
        source: "/service/plastic-injection",
        destination: "/services/plastic-injection-molding",
        permanent: true
      },
      {
        source: "/service",
        destination: "/services",
        permanent: true
      },
      {
        source: "/the-group",
        destination: "/company",
        permanent: true
      },
      {
        source: "/injection-mold-manufacturing",
        destination: "/services/injection-mold-manufacturing",
        permanent: true
      },
      {
        source: "/plastic-injection-molding",
        destination: "/services/plastic-injection-molding",
        permanent: true
      },
      {
        source: "/solutions/for-injection-molders",
        destination: "/solutions/injection-molding-companies",
        permanent: true
      },
      {
        source: "/solutions/for-oem-product-companies",
        destination: "/solutions/oem-product-companies",
        permanent: true
      },
      {
        source: "/industries/medical-healthcare-devices",
        destination: "/industries/medical-devices",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
