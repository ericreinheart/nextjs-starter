import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

import { i18n } from './i18n-config'

function getLocale(request: NextRequest): string {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {}

  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // @ts-expect-error locales are readonly
  const locales: string[] = i18n.locales

  // Use negotiator and intl-localematcher to get best locale
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales,
  )

  return matchLocale(languages, locales, i18n.defaultLocale)
}

function getPathnameLocale(pathname: string): string | undefined {
  return i18n.locales.find(
    (loc) => pathname.startsWith(`/${loc}/`) || pathname === `/${loc}`,
  )
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const pathnameLocale = getPathnameLocale(pathname)

  // If pathname has the default locale prefix, redirect to remove it
  // e.g. /de/products → /products
  if (pathnameLocale === i18n.defaultLocale) {
    const pathWithoutLocale = pathname.slice(`/${i18n.defaultLocale}`.length) || '/'
    const response = NextResponse.redirect(new URL(pathWithoutLocale, request.url))

    response.cookies.set('NEXT_LOCALE', i18n.defaultLocale)

    return response
  }

  // If pathname has a non-default locale prefix, let it through
  // e.g. /en/products → serves [lang]/[[...slug]] with lang=en
  if (pathnameLocale) {
    const response = NextResponse.next()

    response.cookies.set('NEXT_LOCALE', pathnameLocale)

    return response
  }

  // No locale in pathname — determine which locale to use
  const localeCookie = request.cookies.get('NEXT_LOCALE')
  const isLocaleCookieValid = i18n.locales.some(
    (loc) => loc === localeCookie?.value,
  )
  const preferredLocale = isLocaleCookieValid
    ? (localeCookie?.value ?? i18n.defaultLocale)
    : getLocale(request)

  // If preferred locale is not the default, redirect to prefixed path
  // e.g. /products → /en/products
  if (preferredLocale !== i18n.defaultLocale) {
    const response = NextResponse.redirect(
      new URL(`/${preferredLocale}${pathname}`, request.url),
    )

    response.cookies.set('NEXT_LOCALE', preferredLocale)

    return response
  }

  // Default locale: rewrite to /de/... internally (no visible URL change)
  const response = NextResponse.rewrite(
    new URL(`/${i18n.defaultLocale}${pathname}`, request.url),
  )

  response.cookies.set('NEXT_LOCALE', i18n.defaultLocale)

  return response
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
