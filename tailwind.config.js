/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-1': '#000000',
        'dark-2': '#05151E',
        'brown':'#ED7430',
        'dim-1': 'rgba(53, 53, 53, 0.49)'
      },
      fontFamily: {
        sans: ['Advent Pro', 'sans-serif']
      },
      fontSize:{
        'movie-title':'3rem'
      }
    },
  },
  plugins: [],
}

