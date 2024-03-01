import * as React from 'react'

import { Link } from '@/components/ui'
import { Logo } from '@/components/core'
import { cx } from '@/utils'

export function Footer() {
  return (
    <footer>
      <div
        className={cx('my-5 flex flex-col items-center justify-center gap-y-5')}
      >
        <Link
          href="/"
          className={cx(
            'flex h-10 w-auto flex-row items-center justify-start gap-x-4',
          )}
        >
          <Logo className={cx('h-10')} />
          <p className="font-italic text-display-md font-bold">
            Bitcoin Project
          </p>
        </Link>

        <div>
          <span>© 2024 Bitcoin Project</span>
        </div>
      </div>
    </footer>
  )
}
