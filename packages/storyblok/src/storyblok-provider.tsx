'use client'

import * as React from 'react'

type StoryblokProviderProps = {
  children: React.ReactNode
  getStoryblokApi: () => void
}

export function StoryblokProvider({
  children,
  getStoryblokApi,
}: StoryblokProviderProps) {
  getStoryblokApi()

  return children
}
