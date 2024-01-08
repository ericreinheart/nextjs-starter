import '../styles/globals.css'

import type { Metadata } from 'next'

import { Layout } from '@/components/core'
import { cx } from '@/utils'

export const metadata: Metadata = {
  title: 'NextJS Starter',
  description: ':)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={cx('bg-white text-black dark:bg-black dark:text-white')}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
