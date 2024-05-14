import { Accordion, AccordionTrigger, Container } from '@/components/ui'
import { cx } from '@/utils'

export default function Home() {
  return (
    <Container>
      <h1 className={cx('text-4xl mb-8')}>Components</h1>

      <h2 className={cx('text-2xl mb-4')}>Minimal Accordion Component</h2>
      <Accordion
        className={cx('border-stone-300 max-w-screen-sm rounded border')}
      >
        <AccordionTrigger className={cx('text-lg p-4')}>
          Look what is inside
        </AccordionTrigger>

        <div className={cx('px-4 pb-4')}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            distinctio quo, quos quis ab sequi nisi iste ad quae cumque
            voluptatum dolorem repellendus alias aliquid nulla non, nobis
            recusandae sunt.
          </p>

          <h3 className={cx('mb-2 mt-4')}>Foo bar baz</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reiciendis, ad dolore suscipit vero dolorem quaerat veritatis, autem
            beatae illum quae aliquid molestiae dignissimos enim est
            consequuntur! Minus culpa consectetur odit.
          </p>
        </div>
      </Accordion>
    </Container>
  )
}
