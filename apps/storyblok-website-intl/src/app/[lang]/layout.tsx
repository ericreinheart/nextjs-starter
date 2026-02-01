import '@repo/ui/styles.css'
import '../../styles/globals.css'

import type { Metadata } from 'next'

import { Layout, StoryblokProvider } from '@/components/core'
import { cx } from '@/utils'
import { i18n } from '@/i18n-config'
import { isProduction } from '@/lib'

export const metadata: Metadata = {
  title: 'NextJS Starter',
  description: ':)',
}

export function generateStaticParams() {
  if (!isProduction) {
    return []
  }

  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StoryblokProvider>
      <html className="dark" lang="en">
        <body
          className={cx('bg-white text-black dark:bg-black dark:text-white')}
        >
          <Layout>{children}</Layout>
        </body>
      </html>
    </StoryblokProvider>
  )
}
