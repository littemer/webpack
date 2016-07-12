var path = require('path');
var webpack = require('webpack');
var srcDir = path.resolve('src');
/**
 * webpack�����ļ�
 * @type {{entry: string[], output: {path: string, filename: string}, module: {loaders: *[]}}}
 */
module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:9090',
		'webpack/hot/dev-server',
		'./src/pages/app.js'
	],
	output: {
		path: __dirname + '/build/',
		publicPath: '/_kdf/',
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel-loader!jsx-loader?harmony"
			}
		]
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin()
	],
	resolve: {
		root: path.resolve(__dirname),
		alias:{
			page:path.join(srcDir,'pages')
		},
		extensions:['','.js','.jsx']
	}
};