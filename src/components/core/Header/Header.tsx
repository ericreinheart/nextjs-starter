import * as React from 'react'

import { Container, Flex, Link, FiatSelector } from '@/components/ui'
import { cx } from '@/utils'

import { ColorModeSwitch } from './includes'

import { Logo } from '../Logo'

export function Header() {
  return (
    <header>
      <Container>
        <Flex className="h-20 items-center justify-between">
          <Link
            className={cx(
              'flex h-10 w-auto flex-row items-center justify-start gap-x-4',
            )}
            href="/"
          >
            <Logo className={cx('h-10')} />
            <p className="font-italic text-display-md font-bold">
              Bitcoin Project
            </p>
          </Link>

          {/* links */}
          <nav>
            {/* {links?.map((link, i) => (
              <Link key={i} href={link.href} isExternal={link.isExternal}>
                {link.label}
              </Link>
            ))} */}
          </nav>

          {/* buttons */}
          <Flex className="items-center gap-6">
            <FiatSelector />
            <ColorModeSwitch />
          </Flex>
        </Flex>
      </Container>
    </header>
  )
}
