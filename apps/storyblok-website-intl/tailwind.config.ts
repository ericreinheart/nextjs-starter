import type { Config } from 'tailwindcss'
import sharedConfig from '@repo/tailwind-config'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  presets: [sharedConfig],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config
