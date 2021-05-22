/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
var path = require('path');
var config = {
  entry: {
    'c4g-framework': './Resources/public/js/c4g-framework-entrypoint.js'
  },
  mode: "production",
  output: {
    filename: '[name].js',
    path: path.resolve('./Resources/public/build/'),
    chunkFilename: '[name].bundle.[contenthash].js',
    publicPath: "bundles/con4gisframework/build/"
  },
  resolve: {
    roots: ['node_modules', 'Resources/public/js'],
    extensions: ['.jsx', '.js']
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
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
          path.resolve('./Resources/public/js/'),
          path.resolve('./Resources/public/js/*'),
          path.resolve('./../CoreBundle/Resources/public/vendor/js/AlertHandler.js'),
          path.resolve('./../MapsBundle/Resources/public/js'),
          path.resolve('./../MapsBundle/Resources/public/js/components')
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