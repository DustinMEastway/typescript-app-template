const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const distPath = path.resolve(__dirname, 'dist');

module.exports = [{
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist'
	},
	entry: {
		app: './src/main-app.ts'
	},
	output: {
		filename: '[name].bundle.js',
		path: distPath,
		publicPath: '/'
	},
	plugins: [
		// clean out the dist directory
		new CleanWebpackPlugin(),
		// create the index.html file with bundles automatically imported
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'index.html')
		})
	],
	module: {
		rules: [
			// typescript
			{
				test: /\.tsx?$/i,
				use: 'ts-loader',
				exclude: /node_modules/
			},
			// images
			{
				test: /\.(png|svg|jpg|gif)$/i,
				use: [
					'file-loader'
				]
			},
			// styles
			{
				test: /\.s?css$/i,
				use: [
					// creates `style` nodes from JS strings
					'style-loader',
					// translates CSS into CommonJS
					'css-loader',
					// compiles Sass to CSS
					'sass-loader'
				]
			}
		]
	},
	resolve: {
		extensions: [ '.ts', '.tsx', '.js', '.json' ],
		modules: [
			path.resolve(__dirname, 'src'),
			path.resolve(__dirname, 'node_modules')
		]
	}
}];
