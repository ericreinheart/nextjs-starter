import * as React from 'react'

import { cx } from '@/utils'

type FlexProps = React.ComponentPropsWithoutRef<'div' | 'nav'> & {
  as?: 'div' | 'nav'
}

/**
 * Flex component
 */
export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  (props, ref) => {
    const { className, as = 'div', ...rest } = props

    return React.createElement(as, {
      ref,
      className: cx(className, 'flex'),
      ...rest,
    })
  }
)

Flex.displayName = 'Flex'
