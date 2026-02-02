import type { ISbStoriesParams, ISbStory } from '@storyblok/react'

import { isStoryblokEnabled } from './utils'
import { getVersion } from './get-version'

export type FetchStoryProps = {
  slug: string[]
  sbParams?: ISbStoriesParams
}

export async function fetchStory<T>(
  storyblokApi: ReturnType<() => { get: Function }>,
  props: FetchStoryProps,
) {
  const { slug, sbParams } = props

  try {
    isStoryblokEnabled()
    const res: ISbStory<T> = await storyblokApi.get(
      `cdn/stories/${slug[0]}`,
      {
        version: getVersion(),
        ...sbParams,
      },
      {
        next: {
          tags: ['storyblok'],
        },
      },
    )

    const story = res.data.story

    return story
  } catch (e) {
    // eslint-disable-next-line no-console -- error log
    console.error(`Failed to fetch data for slug ${slug[0]}`, e)

    return null
  }
}
