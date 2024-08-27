'use client'

import * as React from 'react'
import { usePathname, useRouter } from 'next/navigation'

import { i18n } from '@/i18n-config'
import { cx } from '@/utils'

export function LocaleSwitch() {
  const pathname = usePathname()
  const router = useRouter()
  const [selected, setSelected] = React.useState(pathname.slice(1, 6))

  const handleLocaleChange: React.ChangeEventHandler<HTMLSelectElement> = (
    e,
  ) => {
    const locale = e.target.value
    const currentPath = pathname.slice(7)
    const newPath = `/${locale}${currentPath}`

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
