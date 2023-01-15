import * as React from 'react'
import NextLink, { type LinkProps as NextLinkProps } from 'next/link'

export type LinkProps = NextLinkProps & {
  children: React.ReactNode
  className?: string
  isExternal?: boolean
}
/**
 * Link component
 */
export function Link(props: LinkProps) {
  const { isExternal, href, children, ...rest } = props

  if (isExternal) {
    return (
      <a
        href={href.toString()}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <NextLink href={href} {...rest}>
      {children}
    </NextLink>
  )
}
