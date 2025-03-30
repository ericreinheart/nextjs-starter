import { type SbBlokData, storyblokEditable } from '@storyblok/react/rsc'

import { cx } from '@/utils'

type HeroSectionProps = {
  blok: {
    title: string
    description: string
  } & SbBlokData
}

export function HeroSection(props: HeroSectionProps) {
  const { title, description, ...rest } = props.blok

  return (
    <div
      className={cx('container mx-auto max-w-(--breakpoint-2xl)')}
      {...storyblokEditable(rest)}
    >
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}
