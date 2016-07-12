var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.js');

gulp.task('default', function (done) {
	var compiler = webpack(webpackConfig);
	var server = new WebpackDevServer(compiler, {
		publicPath: '/build/',
		watchOptions: {
			aggregateTimeout: 300,
			poll: 1000
		},
		hot: true,
		stats: true
	});

	server.listen(8090, 'localhost', function (err) {
		if (err) throw new gutil.PluginError('webpack-dev-server', err);
		gutil.log('[webpack-dev-server]', 'http://localhost:8090/webpack-dev-server/');
		// keep the dev-server alive
		done();
	});
});