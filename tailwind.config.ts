import type { Config } from 'tailwindcss'

import { colors, fontFamily, fontSize } from './src/theme'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors,
      container: {
        center: true,
        padding: '1rem',
      },
      fontFamily,
      fontSize,
    },
  },
  plugins: [],
}

export default config
