import { i18n } from '@/i18n-config'
import { fetchStories, isProduction } from '@/lib'

export async function generateStaticParams() {
  if (!isProduction) {
    return []
  }

  const stories = await fetchStories({
    sbParams: {
      version: 'published',
    },
  })

  if (!stories) return []

  const paths = i18n.locales.flatMap((lang) =>
    stories.map(({ slug }: { slug: string }) => ({
      lang,
      slug: slug === 'home' ? undefined : [slug],
    })),
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
