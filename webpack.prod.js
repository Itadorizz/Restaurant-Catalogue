const { merge } = require('webpack-merge');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
	mode: 'production',
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env'],
						},
					},
				],
			},
		],
	},
	plugins: [
		new WorkboxWebpackPlugin.GenerateSW({
			swDest: 'sw.bundle.js',
			clientsClaim: true,
			skipWaiting: true,
			runtimeCaching: [
				{
					urlPattern: /^https:\/\/restaurant-api\.dicoding\.dev/,
					handler: 'NetworkFirst',
					options: {
						cacheName: 'restaurant-api-cache',
						expiration: {
							maxEntries: 50,
							maxAgeSeconds: 24 * 60 * 60,
						},
					},
				},
				{
					// Caching untuk URL gambar dari API
					urlPattern: /^https:\/\/restaurant-api\.dicoding\.dev\/images\/small\/.*$/,
					handler: 'CacheFirst',
					options: {
						cacheName: 'restaurant-images-cache',
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
							maxAgeSeconds: 24 * 60 * 60, // Cache 1 hari
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
});
