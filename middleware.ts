import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Always allow the login page through
  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  const token = req.cookies.get("admin_token")?.value;
  const expectedToken = process.env.ADMIN_TOKEN;

  if (!token || !expectedToken || token !== expectedToken) {
    // API sub-routes get a 401; browser routes get redirected to login
    if (pathname.startsWith("/admin/export")) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
