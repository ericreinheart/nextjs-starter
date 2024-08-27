import { Container } from '@repo/ui'

import { Link } from '@/components/ui'
import { routes } from '@/lib'
import { cx } from '@/utils'

export default function Home() {
  return (
    <Container>
      <h1 className={cx('mb-8 text-4xl')}>NextJS Starter</h1>
    </Container>
  )
}
