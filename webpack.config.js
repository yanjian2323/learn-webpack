let path = require('path');
let htmlWebpackPlugin = require('html-webpack-plugin');
let cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		// 入口文件,webapck从这个文件开始打包
		app: './src/index.js'
	},
	output: {
		path: path.join(__dirname, 'dist'),//打包输出路径
		filename: '[name].[hash].js',//打包完的文件名
		publicPath: '/'
	},
	// 启动一个本地的server
	devServer: {
		port: 8181,
		overlay: true,
		// 确保通过ip能访问到,要不只能通过localhost访问
		host: '0.0.0.0',
		historyApiFallback: {
			rewrites: [{
				from: "/module/a",
				to: "/module/a.html"
			}, {
				from: "/module/b",
				to: "/module/b.html"
			}]
		},
		// 代理
		proxy: {
			"/api": {
				target: "https://www.easy-mock.com/mock/5a2f7f3b6ce8af6869ec692a/D",
				changeOrigin: true
			}
		}
	},
	plugins: [
		// 生成一个html文件，html文件会自动引入打包完的js入口文件
		new htmlWebpackPlugin({
			template: './src/index.html'
		}),
		// 清除dist目录
		new cleanWebpackPlugin(['dist'])
	]
};