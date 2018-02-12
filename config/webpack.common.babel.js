const webpack = require('webpack');
const helpers = require('./helpers');
// const marked = require('marked');
// const times = require('lodash/times');
// const sass = require('node-sass');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');
const LoopMarkdownPlugin = require('../config/LoopMarkdown');


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

module.exports = function(options) {
  isProd = options.env === 'production';
  return {

    /**
     * The entry point for the bundle
     *
     * See: http://webpack.github.io/docs/configuration.html#entry
     */
    entry: {
      'polyfills': helpers.root('src', 'polyfills.ts'),
      'vendor': helpers.root('src', 'vendor.ts'),
      'app': AOT ? helpers.root('src', 'main.aot.ts') : helpers.root('src', 'main.ts')
    },

    /**
     * Options affecting the resolving of modules.
     *
     * See: http://webpack.github.io/docs/configuration.html#resolve
     */
    resolve: {

      /**
       * An array of extensions that should be used to resolve modules.
       *
       * See: http://webpack.github.io/docs/configuration.html#resolve-extensions
       */
      extensions: ['.ts', '.js', '.json'],

      /**
       * An array of directory names to be resolved to the current directory
       */
      modules: [helpers.root('src'), helpers.root('node_modules')],
    },

    /**
     * Options affecting the normal modules.
     *
     * See: http://webpack.github.io/docs/configuration.html#module
     */
    module: {
      rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          use: [{
            loader: 'babel-loader',
            options: {
              presets: ['es2015', { 'modules': false }]
            }
          }]
        },
        {
          test: /\.ts$/,
          loaders: [{
              loader: 'awesome-typescript-loader',
              options: {
                configFileName: helpers.root('src', 'tsconfig.json'),
                useCache: !isProd
              }
            },
            'angular2-template-loader'
          ]
        },
        {
          test: /\.html$/,
          loader: 'html-loader'
        },
        {
          test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
          loader: 'file-loader?name=assets/[name].[hash].[ext]'
        },
        {
          test: /\.json$/,
          loader: 'file-loader?name=assets/[name].[hash].json'
        },
        {
          test: /\.(css|scss)$/,
          exclude: /node_modules/,
          use: [
            { loader: 'to-string-loader' },
            { loader: 'style-loader' },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        }
      ]
    },
    plugins: [
      // Workaround for angular/angular#11580
      new webpack.ContextReplacementPlugin(
        // The (\\|\/) piece accounts for path separators in *nix and Windows
        /angular([\\\/])core([\\\/])@angular/,
        helpers.root('./src'), // location of your src
        {} // a map of your routes
      ),

      new webpack.optimize.CommonsChunkPlugin({
        name: ['app', 'vendor', 'polyfills']
      }),

      new HtmlWebpackPlugin({
        template: helpers.root('src', 'index.html')
      }),

      new WebpackShellPlugin({
        onBuildStart: ['node ./config/dir-parse.js']
      }),

      new webpack.HotModuleReplacementPlugin(),

    ]
  };
};