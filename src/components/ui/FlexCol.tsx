import * as React from 'react'

import { cx } from '@/utils'

type FlexColProps = React.ComponentPropsWithoutRef<'div'>

/**
 * FlexCol component
 */
export const FlexCol = React.forwardRef<HTMLDivElement, FlexColProps>(
  (props, ref) => {
    const { className, ...rest } = props

    return (
      <div
        ref={ref}
        className={cx(className, 'flex flex-col items-start')}
        {...rest}
      />
    )
  }
)

FlexCol.displayName = 'FlexCol'
