import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const protocol = request.headers.get("x-forwarded-proto") || 
                   (request.nextUrl.protocol === "https:" ? "https" : "http");
  const pathname = request.nextUrl.pathname;
  const search = request.nextUrl.search;

  // Skip middleware for static files, API routes, and Next.js internals
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/static") ||
    pathname.match(/\.(ico|png|jpg|jpeg|svg|gif|webp|avif|css|js|woff|woff2|ttf|eot)$/)
  ) {
    return NextResponse.next();
  }

  // Target domain: www.delwebbnorthranchhomes.com
  const targetHost = "www.delwebbnorthranchhomes.com";
  const targetUrl = `https://${targetHost}${pathname}${search}`;

  // Normalize hostname (remove port if present)
  const normalizedHost = hostname.split(":")[0];

  // Check if redirect is needed
  const needsRedirect = 
    normalizedHost !== targetHost || // Non-www or different host
    protocol !== "https"; // HTTP instead of HTTPS

  if (needsRedirect && !hostname.includes("localhost")) {
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
