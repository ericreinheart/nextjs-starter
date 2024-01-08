import defaultTheme from 'tailwindcss/defaultTheme'
import type { ThemeConfig } from 'tailwindcss/types/config'

export const fontFamily: ThemeConfig['fontFamily'] = {
  title: [
    // 'Inter',
    ...defaultTheme.fontFamily.sans,
  ],
  sans: [
    // 'Inter',
    ...defaultTheme.fontFamily.sans,
  ],
}
