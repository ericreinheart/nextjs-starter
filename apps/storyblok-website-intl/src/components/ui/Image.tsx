import * as React from 'react'
import NextImage, { type ImageProps as NextImageProps } from 'next/image'

export type ImageProps = NextImageProps

/**
 * Image component
 */
export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  (props, ref) => {
    return <NextImage ref={ref} {...props} />
  },
)

Image.displayName = 'Image'
