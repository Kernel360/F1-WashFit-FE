import { NextRequest, NextResponse } from 'next/server';

const middleware = (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const cookie = request.cookies.get('token');

  let token;

  if (cookie) {
    token = cookie.value;
  }

  if (!token && (
    pathname === '/my-page'
    || pathname === '/favorite'
    || pathname === '/my-page/car-details'
    || pathname === '/my-page/car-wash-details'
    || pathname === '/my-page/profile'
  )) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
};

export default middleware;

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
