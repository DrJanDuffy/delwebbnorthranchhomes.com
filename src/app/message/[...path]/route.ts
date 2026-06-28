import { NextResponse } from "next/server";

/**
 * Route handler for /message/* paths
 * Returns 404 for any /message/* requests (e.g., /message/captcha)
 * This prevents soft 404s in Google Search Console
 */
export async function GET() {
  return new NextResponse(null, {
    status: 404,
    headers: { 'X-Robots-Tag': 'noindex, nofollow' },
  });
}

export async function POST() {
  return new NextResponse(null, {
    status: 404,
    headers: { 'X-Robots-Tag': 'noindex, nofollow' },
  });
}
