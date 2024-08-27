import type { Config } from 'tailwindcss'

import { colors, fontFamily, fontSize } from './theme'

// We want each package to be responsible for its own content.
const config: Omit<Config, 'content'> = {
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
