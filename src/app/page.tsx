import { Container, Link } from '@/components/ui'
import { routes } from '@/lib'
import { cx } from '@/utils'

export default function Home() {
  return (
    <Container>
      <h1 className={cx('text-4xl mb-8')}>NextJS Starter</h1>

      <Link
        href={routes.components}
        className={cx('underline-offset-2', 'hover:underline')}
      >
        See components
      </Link>
    </Container>
  )
}
