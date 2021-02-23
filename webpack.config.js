/**
 * @type {import('webpack').Configuration}
 */
const { resolve } = require('path');
const merge = require('webpack-merge');
const argv = require('yargs-parser')(process.argv.slice(2));
const _mode = argv.mode || 'development';
const _mergeConfig = require(`./config/webpack.${_mode}.js`);
const WebpackBar = require('webpackbar');
const webpackBaseConfig = {
  cache: {
    type: 'filesystem',
    // cacheDirectory: resolve(__dirname, '.temp'),
  },
  entry: {
    main: resolve('src/web/index.tsx'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'swc-loader',
        },
      },
    ],
  },
  resolve: {
    alias: {
      '@components': resolve('src/web/components'),
      '@atoms': resolve('src/web/recoil/atoms'),
      '@selectors': resolve('src/web/recoil/selectors'),
    },
    extensions: ['.js', '.ts', '.tsx', 'jsx'],
  },
  plugins: [new WebpackBar()],
};

module.exports = merge.default(webpackBaseConfig, _mergeConfig);
