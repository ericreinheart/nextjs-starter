import Head from 'next/head'
import * as React from 'react'

type SeoSectionProps = {
  title: string
  description: string
  isNoIndex?: boolean
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogUrl?: string
  ogType?: string
}

export function SeoSection(props: SeoSectionProps) {
  const {
    title,
    description,
    isNoIndex = false,
    ogDescription,
    ogImage,
    ogTitle,
    ogType,
    ogUrl,
  } = props

  return (
    <Head>
      <title>{title}</title>
      <meta key="description" name="description" content={description} />
      <meta content="#000" name="theme-color" />
      <link rel="icon" href="/favicon.ico" />

      {/* exclude page from google if activated by the editor of the page */}
      {isNoIndex && <meta key="robots" name="robots" content="noindex" />}

      {ogTitle && <meta key="og:title" property="og:title" content={ogTitle} />}

      {ogDescription && (
        <meta
          key="og:description"
          property="og:description"
          content={description}
        />
      )}

      {ogImage && <meta key="og:image" property="og:image" content={ogImage} />}

      {ogUrl && <meta key="og:url" property="og:url" content={ogUrl} />}

      {ogType && <meta key="og:type" property="og:type" content={ogType} />}
    </Head>
  )
}
