const { merge } = require('webpack-merge');
const common  = require('./webpack.common');
const { resolveApp } = require('./paths');

module.exports = merge(common, {
  mode: 'production',
  // 输出
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: resolveApp('dist'),
    clean: true
  }
})