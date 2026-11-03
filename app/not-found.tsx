import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Page Not Found | Arktech Mold" },
  robots: null
};

export default function NotFound() {
  return <div style={{ fontFamily: "system-ui", height: "100vh", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}><div><h1 style={{ display: "inline-block", margin: "0 20px 0 0", padding: "0 23px 0 0", fontSize: 24, fontWeight: 500, verticalAlign: "top", lineHeight: "49px", borderRight: "1px solid" }}>404</h1><div style={{ display: "inline-block" }}><h2 style={{ fontSize: 14, fontWeight: 400, lineHeight: "49px", margin: 0 }}>This page could not be found.</h2></div></div></div>;
}
