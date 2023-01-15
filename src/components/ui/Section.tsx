import * as React from 'react'

import { cx } from '@/utils'

type SectionProps = React.ComponentPropsWithoutRef<'section'>
/**
 * Section component
 */
export const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  (props, ref) => {
    const { className, ...rest } = props

    return (
      <section
        ref={ref}
        className={cx(className, 'my-48 md:my-64')}
        {...rest}
      />
    )
  }
)

Section.displayName = 'Section'
