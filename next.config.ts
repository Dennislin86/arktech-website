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
        source: "/dfm-engineering",
        destination: "/injection-molding-engineering",
        permanent: true
      },
      {
        source: "/services/dfm-engineering",
        destination: "/injection-molding-engineering",
        permanent: true
      },
      {
        source: "/tooling-examples",
        destination: "/injection-molds",
        permanent: true
      },
      {
        source: "/services/mold-trial-sampling-support",
        destination: "/injection-molds/mold-trial-validation",
        permanent: true
      },
      {
        source: "/services/tooling-spare-parts",
        destination: "/injection-molds/mold-spare-parts",
        permanent: true
      },
      {
        source: "/tooling-examples/large-component-molds",
        destination: "/injection-molds/large-injection-molds",
        permanent: true
      },
      {
        source: "/tooling-examples/insert-molds",
        destination: "/injection-molds/insert-molding-tools",
        permanent: true
      },
      {
        source: "/injection-molds/large-component-molds",
        destination: "/injection-molds/large-injection-molds",
        permanent: true
      },
      {
        source: "/injection-molds/insert-molds",
        destination: "/injection-molds/insert-molding-tools",
        permanent: true
      },
      {
        source: "/tooling-examples/die-casting-molds",
        destination: "/services/die-casting-mold",
        permanent: true
      },
      {
        source: "/tooling-examples/:slug",
        destination: "/injection-molds/:slug",
        permanent: true
      },
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
        destination: "/manufacturing-capabilities",
        permanent: true
      },
      {
        source: "/services",
        destination: "/manufacturing-capabilities",
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
