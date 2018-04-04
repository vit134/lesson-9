const path = require('path');

module.exports = {
	entry: './index.js',
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
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist')
	}
};