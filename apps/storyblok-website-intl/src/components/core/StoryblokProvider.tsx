'use client'

import type * as React from 'react'

import { getStoryblokApi } from '@/lib'

export default function StoryblokProvider({
  children,
}: {
  children: React.ReactNode
}) {
  getStoryblokApi()

  return children
}
