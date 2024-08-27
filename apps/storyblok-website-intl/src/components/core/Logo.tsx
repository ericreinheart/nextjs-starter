import * as React from 'react'

export const Logo = React.forwardRef<
  SVGSVGElement,
  React.ComponentPropsWithoutRef<'svg'>
>((props, ref) => (
  <svg
    ref={ref}
    {...props}
  >
    {/* add logo here */}
  </svg>
))

Logo.displayName = 'Logo'
