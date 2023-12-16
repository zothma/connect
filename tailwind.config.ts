import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      darker: '#372D25',
      dark: '#46392F',
      grey: '#ACA5A0',
      lightgrey: '#CDC9C6',
      white: '#FFFFFF',
    },
    extend: {
      backgroundImage: {
        'background-login': 'url(/images/background-login.jpg)',
      },
      dropShadow: {
        box: '4px 4px 6px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}
export default config
