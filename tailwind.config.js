/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 8px 35px 0px rgba(244, 85, 0, 0.6)',
      },
      colors: {
        primary: '#F45500',
        secondary: '#0C0400',
        tertiary: '#979797',
      },
    },
  },
  plugins: [],
}