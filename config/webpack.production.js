const TerserPlugin = require('terser-webpack-plugin');
const os = require('os');
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: os.cpus().length - 1,
      }),
    ],
  },
  plugins: [],
};
