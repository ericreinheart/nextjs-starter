import * as React from 'react'
import NextImage, { type ImageProps as NextImageProps } from 'next/image'

export type ImageProps = NextImageProps

/**
 * Image component
 */
export function Image(props: ImageProps) {
  return <NextImage {...props} />
}
