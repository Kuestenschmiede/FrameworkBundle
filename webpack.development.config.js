/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 10
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require("webpack");
var path = require('path');
var config = {
  entry: {
    'c4g-framework': './src/Resources/public/js/c4g-framework-entrypoint.js'
  },
  mode: "development",
  output: {
    filename: '[name].js',
    path: path.resolve('./src/Resources/public/build/'),
    chunkFilename: '[name].bundle.js',
    publicPath: "bundles/con4gisframework/build/"
  },
  devtool: "inline-source-map",
  resolve: {
    modules: ['node_modules', 'src/Resources/public/js'],
    extensions: ['.jsx', '.js'],
    fallback: {
      "http": false,
      "https": false,
      "buffer": false,
      "url": false,
      "fs": false
    },
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules(?!\/ol)/,
        loader: "babel-loader",
        include: [
          path.resolve('.'),
          path.resolve('./src/Resources/public/js/'),
          path.resolve('./src/Resources/public/js/*'),
          path.resolve('./../CoreBundle/src/Resources/public/vendor/js'),
          path.resolve('./../CoreBundle/src/Resources/public/vendor/js/*'),
          path.resolve('./../MapsBundle/src/Resources/public/js'),
          path.resolve('./../MapsBundle/src/Resources/public/js/*')
        ],
        options: {
          extends: path.resolve('.babelrc')
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.(eot|woff|ttf)/,
        loader: 'url-loader'
      },
      {
        test: /\.png$/,
        loader: 'file-loader'
      }
    ]
  }
};

module.exports = config;