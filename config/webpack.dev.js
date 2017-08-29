const helpers = require('./helpers');
const webpackMerge = require('webpack-merge');
const WebpackShellPlugin = require('webpack-shell-plugin');
const commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  plugins: [
    new WebpackShellPlugin({
      onBuildStart: ['node ./config/dir-parse.js']
    })
  ],
  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});