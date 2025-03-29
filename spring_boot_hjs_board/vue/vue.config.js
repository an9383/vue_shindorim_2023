const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "./" : "",
  outputDir: '../src/main/resources/static', // Build Directory
	devServer: {
		proxy: 'http://localhost' // Spring Boot Server
	}
})