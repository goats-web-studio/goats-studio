import { NextResponse, type NextRequest } from 'next/server';
import { defaultLocale, locales } from '@/i18n/config';

/* Всё, что пришло без префикса языка, уводим на язык по умолчанию: / -> /ru */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next|cases|icon.svg|favicon.ico|robots.txt|sitemap.xml|.*\..*).*)'],
};
