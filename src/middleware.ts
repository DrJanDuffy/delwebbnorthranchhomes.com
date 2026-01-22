import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const protocol = request.headers.get("x-forwarded-proto") || "https";
  const pathname = request.nextUrl.pathname;
  const search = request.nextUrl.search;

  // Skip middleware for static files and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/static") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Target domain: www.delwebbnorthranchhomes.com
  const targetHost = "www.delwebbnorthranchhomes.com";
  const targetUrl = `https://${targetHost}${pathname}${search}`;

  // Redirect non-www to www
  if (hostname === "delwebbnorthranchhomes.com") {
    return NextResponse.redirect(targetUrl, 301);
  }

  // Redirect HTTP to HTTPS (only if not already HTTPS)
  if (protocol === "http" && !hostname.includes("localhost")) {
    return NextResponse.redirect(targetUrl, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - files with extensions (images, etc.)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
