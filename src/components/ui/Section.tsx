import * as React from 'react'

type SectionProps = React.ComponentPropsWithoutRef<'section'>

/**
 * Section component
 */
export const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  (props, ref) => {
    const { className, ...rest } = props

    return <section ref={ref} className={className} {...rest} />
  },
)

Section.displayName = 'Section'
