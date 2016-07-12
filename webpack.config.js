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
				test: /\.jsx$/,
				exclude: /node_modules/,
				//loader: "babel-loader!jsx-loader?harmony"
				// 在这里添加 react-hot，注意这里使用的是loaders，所以不能用 query，应该把presets参数写在 babel 的后面
				loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
			}
		]
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin()
	],
	resolve: {
		root: path.resolve(__dirname),
		alias:{
			page: path.join(srcDir,'pages'),
			comp: path.join(srcDir,'components'),
			comp2: path.join(srcDir,'pages/components')
		},
		extensions:['','.js']
	}
};