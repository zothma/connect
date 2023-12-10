import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-login': 'url(/images/background-login.jpg)',
      },
      dropShadow: {
        box: '3px 3px 15px rgba(0, 0, 0, 0.10)',
      },
    },
  },
  plugins: [],
}
export default config
