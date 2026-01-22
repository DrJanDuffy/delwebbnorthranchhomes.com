import { NextRequest, NextResponse } from "next/server";
import { notFound } from "next/navigation";

/**
 * Route handler for /message/* paths
 * Returns 404 for any /message/* requests (e.g., /message/captcha)
 * This prevents soft 404s in Google Search Console
 */
export async function GET(request: NextRequest) {
  // Explicitly return 404 for all /message/* paths
  return new NextResponse(null, { status: 404 });
}

export async function POST(request: NextRequest) {
  // Explicitly return 404 for all /message/* paths
  return new NextResponse(null, { status: 404 });
}
