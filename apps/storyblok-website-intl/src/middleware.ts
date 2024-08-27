import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

import { i18n } from './i18n-config'

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {}

  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // @ts-expect-error locales are readonly
  const locales: string[] = i18n.locales

  // Use negotiator and intl-localematcher to get best locale
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales,
  )

  const locale = matchLocale(languages, locales, i18n.defaultLocale)

  return locale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  const locale = getLocale(request)

  // check for existing locale cookie
  const cookies = request.cookies
  const localeCookie = cookies.get('NEXT_LOCALE')
  const isLocaleCookieValid = i18n.locales.some(
    (loc) => loc === localeCookie?.value,
  )

  // Check if there is any supported locale in the pathname
  const isPathnameMissingLocale = i18n.locales.every(
    (loc) => !pathname.startsWith(`/${loc}/`) && pathname !== `/${loc}`,
  )

  if (!isPathnameMissingLocale) {
    const response = NextResponse.next()

    // Set the locale cookie
    response.cookies.set('NEXT_LOCALE', pathname.split('/')[1])

    return response
  }

  // Redirect if there is no locale in the pathname
  // e.g. incoming request is /products
  // The new URL is now /en-us/products
  const response = NextResponse.redirect(
    new URL(
      `/${
        isLocaleCookieValid ? localeCookie?.value : locale || i18n.defaultLocale
      }${pathname.startsWith('/') ? '' : '/'}${pathname}`,
      request.url,
    ),
  )

  // Set the locale cookie
  if (!localeCookie || !isLocaleCookieValid) {
    response.cookies.set('NEXT_LOCALE', locale || i18n.defaultLocale)
  }

  return response
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
