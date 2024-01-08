import type { Config } from 'tailwindcss'

import { colors, fontFamily, fontSize } from './src/theme'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors,
    fontFamily,
    fontSize,
    extend: {},
  },
  plugins: [],
}

export default config
