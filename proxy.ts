import { type NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  if (request.nextUrl.searchParams.has("elementor_library") || request.nextUrl.pathname === "/*") {
    return new Response("Gone", {
      status: 410,
      headers: {
        "Cache-Control": "public, max-age=0, must-revalidate",
        "Content-Type": "text/plain; charset=utf-8"
      }
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    { source: "/:path*", has: [{ type: "query", key: "elementor_library" }] },
    "/:legacy(\\*)"
  ]
};
