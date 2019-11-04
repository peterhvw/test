const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.js',

	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new webpack.ProgressPlugin(), 
		new HtmlWebpackPlugin({
			filename: './index.html',
			template: './src/index.html',
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css',
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			Util: 'exports-loader?Util!bootstrap/js/dist/util'
		  }) 
	],
	resolve: {
		extensions: ['*', '.js', '.jsx']
    },
	module: {
		rules: [
			{
				test: /.(js|jsx)$/,
				include: [path.resolve(__dirname, 'src')],
				loader: 'babel-loader',

				options: {
					plugins: ['syntax-dynamic-import'],

					presets: [
						[
							'@babel/preset-env',
							{
								modules: false
							}
						]
					]
				}
			},
			{
				test: /\.(css|scss)$/,
				use: [
				  {
					loader: MiniCssExtractPlugin.loader,
					options: {
					  publicPath: (resourcePath, context) => {
						return path.relative(path.dirname(resourcePath), context) + '/';
					  },
					},
				  },
				  'css-loader',
				  {
					loader: 'postcss-loader', // Run post css actions
					options: {
					  plugins: function () { // post css plugins, can be exported to postcss.config.js
						return [
						  require('precss'),
						  require('autoprefixer')
						];
					  }
					}
				  },
				  'sass-loader',
				],
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [
				  {
					loader: 'file-loader',
					options: {
					  name: '[name].[ext]',
					  outputPath: 'assets/images'
					}
				  }
				]
			  }
		]
	},

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: true
		}
	},

	devServer: {
		open: true
	}
};
