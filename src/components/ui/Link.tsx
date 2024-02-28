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
export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => {
    const { isExternal, href, children, ...rest } = props

    if (isExternal) {
      return (
        <a
          ref={ref}
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
      <NextLink ref={ref} href={href} passHref {...rest}>
        {children}
      </NextLink>
    )
  },
)

Link.displayName = 'Link'
