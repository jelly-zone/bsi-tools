// const { defineConfig } = require('@vue/cli-service')
// module.exports = ({
//   transpileDependencies: true,
//   pages: {
//     index: {
//       entry: 'src/main.js',
//       template: 'public/index.html',
//       filename: 'index.html',
//       title: 'Index Page',
//     }
//   }
// })
module.exports = {
	publicPath: './',
	css: {
		loaderOptions: {
			less: {
				lessOptions: {
					strictMath: true,
				},
			},
		},
	},
}
