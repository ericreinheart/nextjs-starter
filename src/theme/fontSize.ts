import type { ThemeConfig } from 'tailwindcss/types/config'

export const fontSize: ThemeConfig['fontSize'] = {
  // display
  'display-2xl': [
    '4.5rem', // 72px
    {
      lineHeight: '1.25',
      letterSpacing: '-0.02em',
    },
  ],

  'display-xl': [
    '3.75rem', // 60px
    {
      lineHeight: '4.5rem', // 72px
      letterSpacing: '-0.02em',
    },
  ],

  'display-lg': [
    '3rem', // 48px
    {
      lineHeight: '1.25', // 60px
      letterSpacing: '-0.02em',
    },
  ],

  'display-md': [
    '2.25rem', // 36px
    {
      lineHeight: '2.75rem', // 44px
      letterSpacing: '-0.02em',
    },
  ],

  'display-sm': [
    '1.875rem', // 30px
    {
      lineHeight: '2.375rem', // 38px
    },
  ],

  'display-xs': [
    '1.5rem', // 24px
    {
      lineHeight: '2rem', // 32px
    },
  ],

  //body
  xl: [
    '1.25rem', // 20px
    {
      lineHeight: '1.875rem', // 30px
    },
  ],

  lg: [
    '1.125rem', // 18px
    {
      lineHeight: '1.75rem', // 28px
    },
  ],

  md: [
    '1rem', // 16px
    {
      lineHeight: '1.5rem', // 24px
    },
  ],

  sm: [
    '0.875rem', // 14px
    {
      lineHeight: '1.25rem', // 20px
    },
  ],

  xs: [
    '0.75rem', // 12px
    {
      lineHeight: '1.125rem', // 18px
    },
  ],
}
