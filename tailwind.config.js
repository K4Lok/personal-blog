/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js, jsx}",
    "./components/**/*.{js, jsx}",
  ],
  theme: {
    extend: {
      colors: {
        postCard: '#F8F8F8',
        cardDate: '#32A8EB',
      },
      padding: {
        'wrapper': '18px',
        'navbar': '80px',
      },
      maxWidth: {
        'container': '1080px',
      }
    },
  },
  plugins: [],
}
