var path = require('path');
var webpack = require('webpack');
// var recursive = require('recursive-readdir-sync');
var srcDir = path.resolve('src');
var root = path.join(__dirname);
var pagesDir = path.join(root, 'src/pages');
var debug = true;
/**
 * webpack配置文件
 * @type {{entry: string[], output: {path: string, filename: string}, module: {loaders: *[]}}}
 */

/**
 * JS库集合
 */
// var vendors = {
// 	'ajaxSetting': {
// 		type: 'lib',
// 		path: srcDir + '/static/js/base/ajaxSetting.js'
// 	}
// };

/**
 * 生成entry map
 * @param  {string} pagesDir
 * @return {object}
 */
// function genEntryMap(pagesDir) {
// 	var entryMap = {};
//
// 	// 设置vendor入口
// 	// var vendorNames = Object.keys(vendors);
// 	// entryMap.vendors = vendorNames;
//
// 	var allFilePaths = recursive(pagesDir);
//
// 	allFilePaths.forEach(function (filePath) {
// 		var match = filePath.match(/pages[\\|\/](.+)\.js$/); // windows下的路径分隔符是`\\`
// 		var entryName = match ? match[1] : '';
//
// 		if (entryName) {
// 			if (entryMap[entryName]) {
// 				throw new Error('entry命名同名冲突, 请重新命名\n' + filePath);
// 			} else {
// 				entryMap[entryName] = [filePath];
// 				if (debug) {
// 					entryMap[entryName].unshift(
// 							'webpack-dev-server/client?http://localhost:8090',
// 							'webpack/hot/dev-server'
// 					);
// 				}
// 			}
// 		}
// 	});
// 	return entryMap;
// }

module.exports = {
	entry: //genEntryMap(pagesDir),
	[
		'webpack-dev-server/client?http://localhost:8090',
		'webpack/hot/dev-server',
		'./src/pages/home/app.js'
	],
	output: {
		path: '/_build/',
		publicPath: '/dist/',
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				// loader: "babel-loader!jsx-loader?harmony"
				// 在这里添加 react-hot，注意这里使用的是loaders，所以不能用 query，应该把presets参数写在 babel 的后面
				// # For ES6/ES2015 support
				// npm install babel-preset-es2015 --save-dev
				// # If you want to use JSX
				// npm install babel-preset-react --save-dev
				// # If you want to use experimental ES7 features
				// npm install babel-preset-stage-0 --save-dev
				loader: 'react-hot!babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0'
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	resolve: {
		root: root,
		alias: {
			page: path.join(srcDir, 'pages'),
			comp: path.join(srcDir, 'components')
		},
		modulesDirectories: ['node_modules'],
		/* 没有后缀之模块的查找顺序, e.g: require('a')查找顺序为: a->a.js->a.tpl->a.json */
		extensions: ['', '.js', 'jsx', '.tpl', '.less', '.sass', '.css', '.png', '.ttf', '.json']
	}

};
