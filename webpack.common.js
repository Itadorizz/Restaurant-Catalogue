/* eslint-disable no-undef */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, './src/scripts/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, './src/templates/index.html'),
      favicon: path.resolve(__dirname, './src/public/favicon.png')
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: 'sw.bundle.js',
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/restaurant-api\.dicoding\.dev/,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'restaurantV1',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 24 * 60 * 60,
            },
          },
        },
        {

          urlPattern: /^https:\/\/restaurant-api\.dicoding\.dev\/images\/medium\/.*$/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'restaurantV1-images-cache',
            expiration: {
              maxEntries: 60,
              maxAgeSeconds: 30 * 24 * 60 * 60,
            },
          },
        },
        {
          urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'local-image-cache',
            expiration: {
              maxEntries: 60,
              maxAgeSeconds: 30 * 24 * 60 * 60,
            },
          },
        },
        {
          urlPattern: /detail\.js$/,
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'detail-js-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 24 * 60 * 60,
            },
          },
        },
        {
          urlPattern: /\.(?:js|css)$/,
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'static-resources-cache',
          },
        },
      ],
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    open: true,
    compress: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    port: 9000,
  },
};