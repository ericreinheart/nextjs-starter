import type { ThemeConfig } from 'tailwindcss/types/config'

export const fontSize: ThemeConfig['fontSize'] = {
  h1: [
    '3.375rem', // 54px
    {
      lineHeight: '4.25rem', // 68px
      fontWeight: '700',
    },
  ],
}
