import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'main-background': "url('/background.png')",  
      },
      minHeight: {
        'mainApp': 'calc(100vh - 52px)',
      },
      height:{
        'mainApp': 'calc(100vh - 52px)',
        'loginApp': 'calc(100vh - 60px)'
      },
      colors: {
        'primary': '#053B50',
        'primaryOpacity': '#053B50cc',
        'secondary': '#64ccc5'
      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '900px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1200px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}
export default config
