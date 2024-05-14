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
        className={cx(className, 'container max-w-screen-xl')}
        {...rest}
      />
    )
  },
)

Container.displayName = 'Container'
