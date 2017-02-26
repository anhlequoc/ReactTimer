var webpack = require('webpack');//add from section 7 foundation clip 02

module.exports = {
	entry: [
		'script!jquery/dist/jquery.min.js',
		'script!foundation-sites/dist/js/foundation.min.js',
		'./app/app.jsx', //tell webpack where to start compiling
	],
	//add from section 7 foundation clip 02
	externals: {
		jquery: 'jQuery',
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		})
	],
	//
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		//dua đường dẫn các module vào đây cho dễ quản lý
		root: __dirname,
		alias: {
			Main: 'app/components/Main.jsx',
			Nav: 'app/components/Nav.jsx',
			Timer: 'app/components/Timer.jsx',
			Countdown: 'app/components/Countdown.jsx',
			Clock: 'app/components/Clock.jsx',
			applicationStyles: 'app/styles/app.scss'
		},
		extensions: ['', '.js', '.jsx']//return extension of file we want to execute
	},
	//add babel-loader de doc jsx
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0'] //stage-0 là 1 plugin của bable hỗ trợ js 2015 mới nhất
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	},
	devtool: '#inline-source-map'
};
