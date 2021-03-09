const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require("webpack");
var path = require('path');

var config = {
  entry: {
    'c4g-framework':'./Resources/public/js/c4g-framework-entrypoint.js'
  },
  mode: "production",
  output: {
    filename: '[name].js',
    chunkFilename: '[name].bundle.[contenthash].js',
    path: path.resolve('./Resources/public/build/'),
    publicPath: "bundles/con4gisframework/build/"
  },
  resolve: {
    modules: ['node_modules', 'Resources/public/js'],
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
        use: [{
          loader: "babel-loader",
        }],
        include: [
          path.resolve('.'),
          path.resolve('./Resources/public/js/'),
          path.resolve('./Resources/public/js/*'),
          path.resolve('./../MapsBundle/Resources/public/js'),
          path.resolve('./../MapsBundle/Resources/public/js/*'),
        ],
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