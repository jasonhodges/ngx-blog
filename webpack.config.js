const path = require("path");
const webpack = require('webpack');
const typescript = require('typescript');
const { AotPlugin } = require('@ngtools/webpack');
const { CheckerPlugin } = require('awesome-typescript-loader');

const tsconfigFile = './src/tsconfig.json';

module.exports = {
  cache: true,
  context: __dirname,
  entry: "./src/main.ts",
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [
      'src',
      'node_modules'
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: __dirname,
    stats: {
      chunks: false,
      chunkModules: false,
      chunkOrigins: false,
      errors: true,
      errorDetails: false,
      hash: false,
      timings: false,
      modules: false,
      warnings: false
    },
    publicPath: '/build/',
    port: 3000
  },
  module: {
    rules: [{
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.ts$/,
        include: [
          path.join(__dirname, 'src')
        ],
        exclude: [
          path.join(__dirname, 'node_modules'),
        ],
        use: [{
          loader: 'awesome-typescript-loader',
          options: {
            configFileName: tsconfigFile
          }
        }, {
          loader: 'angular-router-loader'
        }, {
          loader: 'angular2-template-loader'
        }]
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }]
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.jpe?g$/,
        use: [
          "file-loader"
        ]
      }
    ]
  },
  plugins: [
    new CheckerPlugin(),
  ],
  output: {
    filename: '[name].js',
    chunkFilename: '[name]-chunk.js',
    publicPath: '/build/',
    path: path.resolve(__dirname, 'build')
  },
  node: {
    console: false,
    global: true,
    process: true,
    Buffer: false,
    setImmediate: false
  }
};