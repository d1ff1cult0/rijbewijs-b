import { NextRequest, NextResponse } from "next/server";

const COOKIE_NAME = "rb_session";

export function middleware(req: NextRequest) {
  const existing = req.cookies.get(COOKIE_NAME)?.value;
  // Maak de cookie meteen beschikbaar voor downstream (RSC/route handlers)
  // in dezelfde request, en bewaar hem in de browser.
  if (existing) return NextResponse.next();

  // crypto.randomUUID() is beschikbaar als globale Web Crypto API in de
  // Edge runtime (geen Node 'crypto' import, die werkt niet in middleware).
  const key = crypto.randomUUID();
  req.cookies.set(COOKIE_NAME, key);
  const res = NextResponse.next({ request: { headers: req.headers } });
  res.cookies.set(COOKIE_NAME, key, {
    httpOnly: false,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
  });
  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
