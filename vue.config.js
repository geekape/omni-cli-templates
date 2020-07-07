module.exports = {
	devServer: {
		port: 8000,
		disableHostCheck: true,
		proxy: {
			'/api': {
				target: 'https://www.v2ex.com',
				changeOrigin: true,
				secure: false
			}
		}
	}
}
