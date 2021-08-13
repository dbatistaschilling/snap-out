const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withPWA = require('next-pwa');
// const withCss = require("@zeit/next-css");
// const withPurgeCss = require("next-purgecss");

const settings = withPlugins([
  [optimizedImages, {
    mozjpeg: {
      quality: 80,
    },
    pngquant: {
      speed: 3,
      strip: true,
      verbose: true,
    },
    imagesPublicPath: '/snap-out/out/_next/static/images/',
  }],
  {
    devIndicators: {
      autoPrerender: false,
    },
    pwa: {
      dest: 'public',
    },
    env: {
      BACKEND_URL: '/snap-out',
    },
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return {
        '/': { page: '/' },
        '/flavia-mazzetti': { page: '/flavia-mazzetti' },
        '/elisa-marsella': { page: '/elisa-marsella' },
        '/laca-ruggieri': { page: '/laca-ruggieri' },
        '/luca-parente': { page: '/luca-parente' },
        '/raul-ruggieri': { page: '/raul-ruggieri' },
      }
    },
  },
])

// const config = withPurgeCss({
//   purgeCssPaths: [
//     'pages/**/*',
//     'components/**/*'
//   ],
//   purgeCss: {
//     whitelist: () => ['player'],
//     whitelistPatterns: () => [/Toastify/, /.*nprogress.*/],
//     rejected: true
//   },
//   purgeCssEnabled: ({ dev, isServer }) => true, // Enable PurgeCSS for all env
// });

// module.exports = config;

module.exports = process.env.NODE_ENV === 'development' ? settings : withPWA(settings);