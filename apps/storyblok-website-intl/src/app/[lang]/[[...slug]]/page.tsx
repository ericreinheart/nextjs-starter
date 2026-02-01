import { type ISbStoriesParams, StoryblokStory } from '@repo/storyblok'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

import { fetchStory, isProduction } from '@/lib'
import type { Locale } from '@/i18n-config'
import { type PageStoryblok } from '@/lib/storyblok.types'

type PageProps = {
  params: Promise<{ slug: string[] | undefined; lang: Locale }>
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params
  const { slug, lang } = params

  const story = await fetchStory({
    slug: slug ?? ['home'],
    sbParams: {
      language: lang,
    },
  })

  if (!story) return {}

  const metaData = story.content as {
    title: string
    description: string
    ogTitle: string
    ogDescription: string
    ogType: 'website' | 'article' | null
    ogUrl: string
    isNoIndex: boolean
  }

  return {
    metadataBase: new URL('https://example.com/'),
    title: metaData.title,
    description: metaData.description,
    openGraph: {
      title: metaData.ogTitle,
      description: metaData.ogDescription,
      type: metaData.ogType ?? 'website',
      url: metaData.ogUrl,
    },
    robots: {
      index: !metaData.isNoIndex,
    },
  }
}

export default async function StoryblokPage(props: PageProps) {
  const { slug, lang } = await props.params

  const sbParams: ISbStoriesParams = {
    version: isProduction ? 'published' : 'draft',
    language: lang,
  }

  const story = await fetchStory<PageStoryblok>({
    slug: slug ?? ['home'],
    sbParams,
  })

  if (!story) notFound()

  return <StoryblokStory story={story} />
}
