import * as React from 'react'

import { Button, Container, Flex, Link } from '@/components/ui'

import { ColorModeSwitch } from './includes'

import { Logo } from '../Logo'

export function Header() {
  return (
    <header>
      <Container>
        <Flex className="items-center justify-between">
          <Link href="/">
            <Logo />
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
            <Button>foo</Button>
            <ColorModeSwitch />
          </Flex>
        </Flex>
      </Container>
    </header>
  )
}
