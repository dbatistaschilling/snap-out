const CompressionPlugin = require('compression-webpack-plugin');
const basePath = '/spa-github-page-template'; // or '' if basePath needs to be left unchanged
const webpackBasePath = process.env.SPA_EXP_BUILD === 'true' ? basePath : '';

module.exports = {
  publicRuntimeConfig: {
    basePath: webpackBasePath,
  },
  webpack: function(config) {
    config.plugins.push(new CompressionPlugin());

    return config;
  }
};