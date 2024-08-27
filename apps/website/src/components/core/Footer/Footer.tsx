import * as React from 'react'

import { Link } from '@/components/ui'
import { Logo } from '@/components/core'

export function Footer() {
  return (
    <footer>
      <div>
        {/* logo */}
        <div>
          <Link href="/">
            <Logo />
          </Link>
        </div>

        {/* links */}
        <ul>
          {/* {links.map(({ label, href }, index) => (
            <Link key={index} href={href}>
              {label}
            </Link>
          ))} */}
        </ul>

        <div>
          <span>copyright text</span>
        </div>
      </div>
    </footer>
  )
}
