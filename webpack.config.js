const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const devServerHost = 'http://localhost';
const devServerPort = 5000;
const assetsFolderName = 'front';
// const modeEnv = process.env.NODE_ENV;
const modeEnv = 'watch';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
	mode: modeEnv === 'production' ? 'production' : 'development',
	entry: {
		main: [
			'./front/js/app.js'
		]
	},
	output: {
		filename: '[name].js',
		chunkFilename: '[name].main.js',
		path: path.resolve(__dirname, 'public/build'),
		publicPath: devServerHost + ':' + devServerPort + '/'
		// publicPath: modeEnv === 'watch' ? (
		// 	devServerHost + ':' + devServerPort + '/'
		// ) : 'build/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: file => (
					/node_modules/.test(file) &&
					!/\.vue\.js/.test(file)
				),
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.(sass|scss|css)$/,
				use: [
					modeEnv === 'watch'
						? 'vue-style-loader' :
						{
							loader: MiniCssExtractPlugin.loader,
							options: {
								publicPath: './',
							},
						},
					'css-loader',
					'sass-loader',
				]
			},
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			filename: 'style.css',
			chunkFilename: '[id].css'
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
		new webpack.DefinePlugin({
			GIT_TAG: JSON.stringify(process.env.GIT_TAG),
			NODE_ENV: JSON.stringify(process.env.NODE_ENV),
		})
],
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'@': path.join(__dirname, assetsFolderName + '/js')
		},
		extensions: [
			'*',
			// '.tsx',
			// '.ts',
			'.js',
			'.vue',
			'.json'
		]
	},
	devtool: 'source-map',
	devServer: {
		publicPath: "/",
		contentBase: 'public',
		// contentBase: path.join(__dirname, assetsFolderName),
		compress: true,
		hot: true,
		// clientLogLevel: 'none',
		port: devServerPort,
		// overlay: {  // Вывод ошибок и предупреждений сборки в HTML
		// 	warnings: true,
		// 	errors: true
		// },
		inline: true,
		index: 'index.html',
		headers: {
			'Access-Control-Allow-Origin': '*'
		},
		watchOptions: {
			poll: true
		}
		// inline
	},
};
module.exports = config;