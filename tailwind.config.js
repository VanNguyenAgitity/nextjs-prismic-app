
module.exports = {
  purge: ['./src/components/**/*.{js,ts,jsx,tsx}', './src/pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    fontFamily: {
      'playfair': ['Playfair Display', 'serif'],
      'montserrat': ['Montserrat', 'sans-serif'],
    },    
    extend: {
      colors: {
        'accent-1': '#333',
        'orange': '#f14b11',
        'blueless': '#3853d8',
        'blackless': '#363637',
      },
      fontSize: {
        'xss': '.625rem',
      },
      spacing: {
        '98': '27rem',
        '100': '28rem',
        '128': '32rem',
        '144': '36rem',
        '214': '40rem',
        '288': '43rem',
        '320': '47rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  variants: {
    fill: [],
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
    }
  },
  plugins: [],
}