const isEnabled = true

export function isStoryblokEnabled() {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- add feature flag later
  if (!isEnabled) {
    throw new Error('Storyblok is not enabled')
  }
}

export function getStoryblokBaseStory(slug: string) {
  return {
    name: slug,
    created_at: new Date().toISOString(),
    published_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    id: Date.now(),
    uuid: crypto.randomUUID(),
    slug,
    full_slug: slug,
    sort_by_date: null,
    position: -10,
    tag_list: [],
    is_startpage: false,
    parent_id: null,
    meta_data: null,
    group_id: `default-${slug}`,
    first_published_at: new Date().toISOString(),
    release_id: null,
    lang: 'en-us',
    path: 'default',
    alternates: [],
    default_full_slug: null,
    translated_slugs: null,
  }
}
