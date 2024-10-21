/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#FFF2D8',
        secondary: '#EAD7BB',
        accent: '#BCA37F',
        background: '#113946',
      },
    },
  },
  plugins: [],
}