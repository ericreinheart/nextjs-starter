'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'

import { cx } from '@/utils'

export function ColorModeSwitch() {
  const [isDark, setIsDark] = React.useState(true)

  const handleClick = () => {
    setIsDark((prev) => !prev)
  }

  React.useEffect(() => {
    const root = window.document.querySelector('html')

    if (isDark) {
      return root?.classList.add('dark')
    }

    root?.classList.remove('dark')
  }, [isDark])

  return (
    <button
      className={cx('hover:text-orange', isDark ? '' : '')}
      onClick={handleClick}
    >
      {isDark ? <Moon /> : <Sun />}
    </button>
  )
}
