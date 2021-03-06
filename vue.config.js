module.exports = {
  lintOnSave: false,

  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://topology.le5le.com/',
        changeOrigin: true,
        //ws: true,
        pathRewrite: {
          '^/api': '/api',
        },
      },
    },
  },
}