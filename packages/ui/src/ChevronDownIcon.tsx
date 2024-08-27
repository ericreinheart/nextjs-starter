import * as React from 'react'

import { cx } from './cx'

export const ChevronDownIcon = React.forwardRef<
  SVGSVGElement,
  React.ComponentPropsWithoutRef<'svg'>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <svg
      ref={ref}
      className={cx('transition-all', className)}
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
})

ChevronDownIcon.displayName = 'ChevronDownIcon'
