import { type ISbStoriesParams } from '@storyblok/react/rsc'

import { i18n } from '@/i18n-config'
import { getStoryblokApi, isProduction } from '@/lib'

async function fetchData(props: { sbParams: ISbStoriesParams }) {
  const { sbParams } = props

  const storyblokApi = getStoryblokApi()

  return storyblokApi.get(`cdn/stories`, sbParams)
}

export async function generateStaticParams() {
  if (!isProduction) {
    return []
  }

  const res: { data: { stories: { slug: string }[] } } = await fetchData({
    sbParams: {
      version: 'published',
    },
  })

  const { data } = res

  const paths = i18n.locales.flatMap((locale) =>
    data.stories.map(({ slug }) => {
      return {
        slug: slug === 'home' ? undefined : [slug],
        locale,
      }
    }),
  )

  return paths
}

export default function SlugLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
