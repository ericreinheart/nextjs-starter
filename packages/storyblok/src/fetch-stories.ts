import type { ISbStories, ISbStoriesParams } from '@storyblok/react'

import { isStoryblokEnabled } from './utils'
import { getVersion } from './get-version'

export type FetchStoriesProps = {
  sbParams?: ISbStoriesParams
}

export async function fetchStories<T>(
  storyblokApi: ReturnType<() => { get: Function }>,
  props: FetchStoriesProps,
) {
  const { sbParams } = props

  try {
    isStoryblokEnabled()
    const res: ISbStories<T> = await storyblokApi.get(
      'cdn/stories',
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

    const stories = res.data.stories

    return stories
  } catch (e) {
    // eslint-disable-next-line no-console -- error log
    console.error(`Failed to fetch data for ${JSON.stringify(sbParams)}`)

    return null
  }
}
