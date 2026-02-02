import { createStoryblok } from '@repo/storyblok'

import { Page } from '@/components/core/Page'
import { HeroSection } from '@/components/sections'

const storyblok = createStoryblok({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  components: {
    page: Page,
    HeroSection,
  },
})

export const getStoryblokApi = storyblok.getStoryblokApi
export const fetchStory = storyblok.fetchStory
export const fetchStories = storyblok.fetchStories
