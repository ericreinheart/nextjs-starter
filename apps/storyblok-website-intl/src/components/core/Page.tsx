import {
  storyblokEditable,
  StoryblokServerComponent,
  type SbBlokData,
} from '@storyblok/react/rsc'

export function Page({ blok }: { blok: SbBlokData & { body: SbBlokData[] } }) {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.body.map((nestedBlok) => (
        <StoryblokServerComponent key={nestedBlok._uid} blok={nestedBlok} />
      ))}
    </main>
  )
}
