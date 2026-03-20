'use client'

import * as React from 'react'
import { usePathname, useRouter } from 'next/navigation'

import { i18n } from '@/i18n-config'
import { cx } from '@/utils'

function stripLocalePrefix(pathname: string): string {
  for (const loc of i18n.locales) {
    if (loc === i18n.defaultLocale) {
      continue
    }

    if (pathname.startsWith(`/${loc}/`)) {
      return pathname.slice(`/${loc}`.length)
    }

    if (pathname === `/${loc}`) {
      return '/'
    }
  }

  return pathname
}

function getCurrentLocale(pathname: string): string {
  for (const loc of i18n.locales) {
    if (loc === i18n.defaultLocale) {
      continue
    }

    if (pathname.startsWith(`/${loc}/`) || pathname === `/${loc}`) {
      return loc
    }
  }

  return i18n.defaultLocale
}

export function LocaleSwitch() {
  const pathname = usePathname()
  const router = useRouter()
  const [selected, setSelected] = React.useState(getCurrentLocale(pathname))

  const handleLocaleChange: React.ChangeEventHandler<HTMLSelectElement> = (
    e,
  ) => {
    const locale = e.target.value
    const pathWithoutLocale = stripLocalePrefix(pathname)

    const newPath =
      locale === i18n.defaultLocale
        ? pathWithoutLocale
        : `/${locale}${pathWithoutLocale}`

    setSelected(locale)
    router.push(newPath)
  }

  return (
    <div>
      <select
        className={cx('text-black')}
        id="locale-select"
        name="locale-select"
        value={selected}
        onChange={handleLocaleChange}
      >
        {i18n.locales.map((locale) => (
          <option key={locale} value={locale}>
            {locale}
          </option>
        ))}
      </select>
    </div>
  )
}
