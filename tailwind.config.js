
module.exports = {
  purge: ['./src/components/**/*.{js,ts,jsx,tsx}', './src/pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    fontFamily: {
      'playfair900Italic': ['Playfair Display', 'serif'],
      'playfair700': ['Playfair700', 'serif'],
      'montserrat': ['Montserrat', 'sans-serif'],
      'montserrat300': ['Montserrat300', 'sans-serif'],
      'montserrat400': ['Montserrat400', 'sans-serif'],
      'montserrat700': ['Montserrat700', 'sans-serif']
    },    
    extend: {
      colors: {
        'accent-1': '#333',
        'orange': '#f14b11',
        'blueless': '#3853d8',
        'bluelight': '#0021c4',
        'blackless': '#363637',
        'grayless': '#999999',
      },
      fontSize: {
        'xss': '.625rem',
        '10xl': '10rem',
      },
      spacing: {
        '98': '27rem',
        '100': '28rem',
        '128': '32rem',
        '144': '36rem',
        '214': '40rem',
        '288': '43rem',
        '320': '47rem',
        'p4': '4%',
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