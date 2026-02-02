'use client'

import type * as React from 'react'

import { StoryblokProvider as RepoStoryblokProvider } from '@repo/storyblok'

import { getStoryblokApi } from '@/lib'

export function StoryblokProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <RepoStoryblokProvider getStoryblokApi={getStoryblokApi}>
      {children}
    </RepoStoryblokProvider>
  )
}
