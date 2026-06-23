import { NextRequest, NextResponse } from 'next/server';
import { locales } from './lib/i18n';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname.startsWith('/_next') || pathname.startsWith('/images') || pathname.includes('.')) {
    return NextResponse.next();
  }
  const hasLocale = locales.some((locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`));
  if (!hasLocale) {
    const url = request.nextUrl.clone();
    url.pathname = `/ar${pathname === '/' ? '' : pathname}`;
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
