import * as React from 'react'

import { cx } from '@/utils'

type AccordionProps = React.ComponentPropsWithoutRef<'details'>

/**
 * Minimal Accordion component using native html details and summary elements.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details
 */
export const Accordion = React.forwardRef<HTMLDetailsElement, AccordionProps>(
  (props, ref) => {
    const { children, className, ...rest } = props

    const classes = cx('overflow-clip', className)

    return (
      <details ref={ref} className={classes} {...rest}>
        {children}
      </details>
    )
  },
)

Accordion.displayName = 'Accordion'

type AccordionTriggerProps = React.ComponentPropsWithoutRef<'summary'>

/**
 * The trigger for an accordion.
 * !important: css override for summary marker necessary
 * summary {
 *  list-style-type: none;
 * }
 *
 * summary::marker {
 *  content: '';
 * }
 *
 * summary::-webkit-details-marker {
 *  display: none;
 * }
 */
export const AccordionTrigger = React.forwardRef<
  HTMLDivElement,
  AccordionTriggerProps
>((props, ref) => {
  const { children, className, ...rest } = props

  const classes = cx(
    'flex cursor-pointer items-center justify-between',
    '[details[open]_&_>_svg]:rotate-180',
    className,
  )

  return (
    <summary ref={ref} className={classes} {...rest}>
      {children}
      {React.Children.count(children) > 1 ? (
        <div className={cx('flex grow justify-end')}>
          <ChevronIcon />
        </div>
      ) : (
        <ChevronIcon />
      )}
    </summary>
  )
})

AccordionTrigger.displayName = 'AccordionTrigger'

/**
 * Chevron icon for accordion trigger to indicate if open or closed.
 */
function ChevronIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cx('transition-all')}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}
