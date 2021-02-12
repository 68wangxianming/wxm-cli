const {resolve} = require('path');
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
      // {
      //   test: /\.(js|jsx|ts|tsx)$/,
      //   exclude: /(node_modules|bower_components)/,
      //   use: {
      //     loader: 'swc-loader',
      //   },
      // },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include: [resolve('src')],
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
          },
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|woff|woff2|ttf|svg|otf)$/,
        type: 'asset',
      },
    ],
  },
  resolve: {
    alias: {
      '@assets': resolve('src/web/assets'),
      '@components': resolve('src/web/components'),
      '@models': resolve('src/web/models'),
      '@routes': resolve('src/web/routes'),
      '@pages': resolve('src/web/pages'),
      '@utils': resolve('src/web/utils'),
      '@tools': resolve('src/web/tools'),
    },
    modules: ['node_modules', resolve('src')],
    extensions: ['.js', '.ts', '.tsx', 'jsx'],
  },
  plugins: [new WebpackBar()],
}

module.exports = merge.default(webpackBaseConfig, _mergeConfig)
