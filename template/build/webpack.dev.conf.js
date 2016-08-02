var path = require('path')
var config = require('../config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var utils = require('./utils')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var projectRoot = path.resolve(__dirname, '../')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = config.devEntryChunk.concat(baseWebpackConfig.entry[name])
})

// 和 babel 有点冲突，并且只是在开发环境下的配置，不打包
var reactHot = {
  test: /\.jsx?$/,
  loader: 'react-hot',
  include: projectRoot,
  exclude: /node_modules/
};

module.exports = merge(baseWebpackConfig, {
  module: {
    loaders: [
      utils.styleLoaders(),
      reactHot
    ]
  },
  // eval-source-map is faster for development
  devtool: '#eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
})
