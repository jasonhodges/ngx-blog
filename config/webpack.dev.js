var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WebpackShellPlugin = require('webpack-shell-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
    new WebpackShellPlugin({
      onBuildStart: ['node ./config/dir-parse.js']
    })
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});