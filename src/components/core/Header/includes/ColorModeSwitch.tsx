'use client'

import * as React from 'react'

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
    <button className={cx('', isDark ? '' : '')} onClick={handleClick}>
      {isDark ? "it's dark" : "it's light"}
    </button>
  )
}
