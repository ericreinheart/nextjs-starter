import { apiPlugin, storyblokInit } from '@storyblok/react/rsc'

import { Page } from '@/components/core'
import { HeroSection } from '@/components/sections'

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    HeroSection,
  },
})
