/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js, jsx}",
    "./components/**/*.{js, jsx}",
  ],
  theme: {
    extend: {
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
