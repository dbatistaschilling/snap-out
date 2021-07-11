const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
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
    // basePath: '/snap-out',
    // assetPrefix: '/snap-out/',
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
]);