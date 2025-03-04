const path = require('path');

// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const STYLE_LIB_BASE_PATH = './libs/mylib-core-styles';

const devtool = "eval-cheap-module-source-map";

// const tsPaths = new TsconfigPathsPlugin({
//   configFile: './tsconfig.base.json',
// });

// config.resolve.plugins
//   ? config.resolve.plugins.push(tsPaths)
//   : (config.resolve.plugins = [tsPaths]);

// const tempAliases = config.resolve.alias;

// config.resolve.alias = config.resolve.alias | {};

// config.resolve.alias = {
//   ...tempAliases,
//   '/fonts': path.resolve(STYLE_LIB_BASE_PATH, 'fonts')
// }

module.exports = {
  devtool,
  module: {
    rules: []
  },
  resolve: {
    alias: {
      '$root': path.resolve('./'),
      '$lib-mylib': path.resolve('./libs/mylib'),
      '/fonts': path.resolve(STYLE_LIB_BASE_PATH, 'fonts'),
      '@libs': path.resolve('./libs'),
      "@my-lib-org/mylib-core-styles": path.resolve('./libs/mylib-core-styles'),
      "@my-lib-org/mylib-core-js": path.resolve('./libs/mylib-core-js')
    }
  }
};
