const withImages = require('next-images')
const withLess = require('@zeit/next-less')
module.exports = withImages(
  {
    images: {
      domains: ['images.prismic.io'],
    },
    webpack(config, options) {
      return config
    },
    async rewrites() {
      return [
        // 307 temporary redirect
        {
          source: '/',
          destination: '/',
        },
        {
          source: '/product/product_13',
          destination: `https://nextjs-with-prismic-app.vercel.app/product/product_13`,
        },
      ];
    }
  },
  withLess(),
  {
    "pagesDir": './src/pages'
  }  
)


