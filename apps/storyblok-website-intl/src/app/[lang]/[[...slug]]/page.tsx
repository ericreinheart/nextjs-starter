import {
  getStoryblokApi,
  StoryblokComponent,
  type ISbStory,
  type ISbStoriesParams,
} from '@storyblok/react/rsc'
import { notFound } from 'next/navigation'
import type {
  Metadata,
  // ResolvingMetadata
} from 'next'

import { isProduction } from '@/lib'
import type { Locale } from '@/i18n-config'

type PageProps = {
  params: { slug: string[] | undefined; lang: Locale }
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

export async function generateMetadata(
  { params }: PageProps,
  // parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug, lang } = params

  const res: ISbStory = await fetchData({
    slug: slug || ['home'],
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
    ogType: 'website' | 'article'
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
      type: metaData.ogType,
      url: metaData.ogUrl,
    },
    robots: {
      index: !metaData.isNoIndex,
    },
  }
}

export default async function StoryblokPage(props: PageProps) {
  const { slug, lang } = props.params

  const sbParams: ISbStoriesParams = {
    version: isProduction ? 'published' : 'draft',
    language: lang,
  }

  const res: ISbStory = await fetchData({
    slug: slug || ['home'],
    sbParams: {
      ...sbParams,
    },
  })

  return <StoryblokComponent blok={res.data.story.content} />
}
