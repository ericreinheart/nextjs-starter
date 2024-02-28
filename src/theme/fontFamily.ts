import defaultTheme from 'tailwindcss/defaultTheme'
import type { ThemeConfig } from 'tailwindcss/types/config'

export const fontFamily: ThemeConfig['fontFamily'] = {
  title: ['Ubuntu', ...defaultTheme.fontFamily.sans],
  sans: ['Ubuntu', ...defaultTheme.fontFamily.sans],
}
