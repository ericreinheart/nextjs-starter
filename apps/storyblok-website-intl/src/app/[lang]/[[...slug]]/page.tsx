import {
  type ISbStory,
  type ISbStoriesParams,
  StoryblokStory,
} from '@storyblok/react/rsc'
import { notFound } from 'next/navigation'
import type {
  Metadata,
  // ResolvingMetadata
} from 'next'

import { getStoryblokApi, isProduction } from '@/lib'
import type { Locale } from '@/i18n-config'

type PageProps = {
  params: Promise<{ slug: string[] | undefined; lang: Locale }>
}

async function fetchData(props: {
  slug: string[]
  sbParams: ISbStoriesParams
}) {
  const { slug, sbParams } = props

  const storyblokApi = getStoryblokApi()

  try {
    const res = await storyblokApi.get(`cdn/stories/${slug[0]}`, sbParams)

    return res
  } catch (e) {
    return notFound()
  }
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const { slug, lang } = params

  const res: ISbStory = await fetchData({
    slug: slug ?? ['home'],
    sbParams: {
      version: isProduction ? 'published' : 'draft',
      language: lang,
    },
  })

  const metaData = res.data.story.content as {
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
  const { slug, lang } = (await props.params)

  const sbParams: ISbStoriesParams = {
    version: isProduction ? 'published' : 'draft',
    language: lang,
  }

  const res: ISbStory = await fetchData({
    slug: slug ?? ['home'],
    sbParams: {
      ...sbParams,
    },
  })

  // const bridgeOptions = { resolveRelations: ['article.author'] }

  return (
    <StoryblokStory
      // bridgeOptions={bridgeOptions}
      story={res.data.story}
    />
  )
}
