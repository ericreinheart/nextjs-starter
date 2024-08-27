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
          // eslint-disable-next-line @typescript-eslint/no-base-to-string -- url is safe to use
          href={href.toString()}
          rel="noopener noreferrer"
          target="_blank"
          {...rest}
        >
          {children}
        </a>
      )
    }

    return (
      <NextLink ref={ref} href={href} {...rest}>
        {children}
      </NextLink>
    )
  },
)

Link.displayName = 'Link'
