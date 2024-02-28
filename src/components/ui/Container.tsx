import * as React from 'react'

import { cx } from '@/utils'

type ContainerProps = React.ComponentPropsWithoutRef<'div'>

/**
 * Container component
 */
export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  (props, ref) => {
    const { className, ...rest } = props

    return (
      <div
        ref={ref}
        className={cx(className, 'container mx-auto max-w-screen-xl px-5')}
        {...rest}
      />
    )
  },
)

Container.displayName = 'Container'
