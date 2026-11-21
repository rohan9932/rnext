import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse } from "next/server";

let defaultLocale = "en";
let locales = ["en", "bn"];

// detects user's preferred locale
function getLocale(request) {
  const acceptedLanguage = request.headers.get("accept-language") ?? undefined;
  const headers = { "accept-language": acceptedLanguage };
  // Passing `locales` to Negotiator ensures unsupported '*' tags aren't passed to Intl.getCanonicalLocales
  const languages = new Negotiator({ headers }).languages(locales);

  return match(languages, locales, defaultLocale);
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // Check if pathname has a supported locale
  const pathnameIsMissingLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // NextResponse.redirect requires an absolute URL
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip Next.js internals (_next), api routes, and static asset files
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
