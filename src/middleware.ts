import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedPrefixes = ["/dashboard"];
const authPages = ["/auth/login", "/auth/register"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const sessionToken = req.cookies.get("authjs.session-token")?.value 
    || req.cookies.get("__Secure-authjs.session-token")?.value;

  const isProtected = protectedPrefixes.some((p) => pathname.startsWith(p));
  const isAuthPage = authPages.some((p) => pathname.startsWith(p));

  if (isProtected && !sessionToken) {
    const loginUrl = new URL("/auth/login", req.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isAuthPage && sessionToken) {
    return NextResponse.redirect(new URL("/dashboard/tenant", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/auth/:path*"],
};
