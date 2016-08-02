/**
 * webpack-dev-server 的启动配置
 * 如果不生效，可以使用直接在 packages.json 的 scripts 里面配置
 */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../config');

var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf');

new WebpackDevServer(webpack(webpackConfig), {
  // gzip config
  compress: true,
  // and webpack publicPath
  publicPath: webpackConfig.output.publicPath,
  // is hot config, must config
  hot: true,
  // fixed router
  historyApiFallback: true
}).listen(config.dev.port, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:'+ config.dev.port +'/');
});
