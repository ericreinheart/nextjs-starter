import '@repo/ui/styles.css'
import '../../styles/globals.css'

import type { Metadata } from 'next'
import {
  StoryblokBridgeLoader,
  apiPlugin,
  storyblokInit,
} from '@storyblok/react/rsc'

import { Layout, Page } from '@/components/core'
import { cx } from '@/utils'
import { HeroSection } from '@/components/sections'
import { i18n } from '@/i18n-config'
import { isProduction } from '@/lib'

export const metadata: Metadata = {
  title: 'NextJS Starter',
  description: ':)',
}

storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    HeroSection,
  },
})

export function generateStaticParams() {
  if (!isProduction) {
    return []
  }

  return i18n.locales.map((locale) => ({ locale }))
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="dark" lang="en">
      <body className={cx('bg-white text-black dark:bg-black dark:text-white')}>
        <Layout>{children}</Layout>
      </body>
      <StoryblokBridgeLoader options={{}} />
    </html>
  )
}
