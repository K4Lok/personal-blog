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
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            maxWidth: '100%',
            code: {
              color: theme('colors.red.400'),
              backgroundColor: theme('colors.blue.100'),
              borderRadius: theme('borderRadius.md'),
              paddingTop: theme('padding[0.5]'),
              paddingRight: theme('padding[1.5]'),
              paddingBottom: theme('padding[0.5]'),
              paddingLeft: theme('padding[1.5]'),
            },
            'code::before': {
              content: 'normal',
            },
            'code::after': {
              content: 'normal',
            },
            a: {
              color: theme('colors.blue.400'),
              fontWeight: '600',
              wordBreak: 'break-all'
            }
          }
        }
      }),
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}
