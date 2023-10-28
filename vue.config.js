const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      '/webapi': {
        target: "ip地址",
        changeOrigin: true
      }
    }
  }
})
