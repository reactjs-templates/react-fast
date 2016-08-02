var path = require('path')

// 监听的端口号，统一在这里
var port = 8080;

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true
  },
  dev: {
    env: require('./dev.env'),
    port: port,
    proxyTable: {}
  },
  devEntryChunk: [
    'webpack-dev-server/client?http://localhost:' + port,
    'webpack/hot/only-dev-server'
  ]
}
