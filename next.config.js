module.exports = {
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
}