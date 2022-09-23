/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'usm': '0.6rem',
        '10xl': ['10rem', { lineHeight: '0.9' }]
      },
      height: {
        '3screen': '300vh',
        '100': '26rem',
        '132': '30rem',
      },
      width: {
        '192': '47.2rem',
        '150': '50rem'
      },
      screens: {
        'desktop': '1875px',
        'tv': '2100px'
      }
    },
  },
  plugins: [],
}