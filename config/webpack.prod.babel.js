const webpack = require('webpack');
const helpers = require('./helpers');
const marked = require('marked');
const times = require('lodash/times');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common.babel');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

/**
 * Webpack Constants
 */
const HMR = helpers.hasProcessFlag('hot');
const AOT = process.env.BUILD_AOT || helpers.hasNpmFlag('aot');
const METADATA = {
  title: 'ngx-blog by @JasonHodges',
  baseUrl: '/',
  isDevServer: helpers.isWebpackDevServer(),
  HMR: HMR,
  AOT: AOT
};

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',

  entry: {
    'polyfills': helpers.root('src', 'polyfills.ts'),
    'vendor': helpers.root('src', 'vendor.ts'),
    'app': AOT ? helpers.root('src', 'main.aot.ts') : helpers.root('src', 'main.ts')
  },
  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
      mangle: {
        keep_fnames: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    }),
    new webpack.LoaderOptionsPlugin({
      htmlLoader: {
        minimize: false // workaround for ng2
      }
    })
  ]
});