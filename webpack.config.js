const path = require('path');

module.exports = {
	entry: {
		suggest: './src/suggest.js',
		emmiter: './src/emmiter/emmiter.js'
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ]
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	}
};