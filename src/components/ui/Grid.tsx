import * as React from 'react'

import { cx } from '@/utils'

type GridProps = React.ComponentPropsWithoutRef<'div'>

/**
 * Grid component
 */
export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  (props, ref) => {
    const { className, ...rest } = props

    return (
      <div
        ref={ref}
        className={cx(className, 'grid grid-cols-6 gap-4 md:grid-cols-12')}
        {...rest}
      />
    )
  }
)

Grid.displayName = 'Grid'
