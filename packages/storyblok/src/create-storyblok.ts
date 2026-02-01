import {
  storyblokInit,
  apiPlugin,
  SbReactComponentsMap,
} from '@storyblok/react/rsc'

import { fetchStory, type FetchStoryProps } from './fetch-story'
import { fetchStories, type FetchStoriesProps } from './fetch-stories'
import { sanitizeUrl } from './sanitize-url'
import { getVersion } from './get-version'

type StoryblokConfig = {
  accessToken: string | undefined
  components: SbReactComponentsMap
}

export function createStoryblok(config: StoryblokConfig) {
  const getStoryblokApi = storyblokInit({
    accessToken: config.accessToken,
    use: [apiPlugin],
    components: config.components,
  })

  return {
    getStoryblokApi,
    fetchStory: <T>(props: FetchStoryProps) =>
      fetchStory<T>(getStoryblokApi(), props),
    fetchStories: <T>(props: FetchStoriesProps) =>
      fetchStories<T>(getStoryblokApi(), props),
    sanitizeUrl,
    getVersion,
  }
}
