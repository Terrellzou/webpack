const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: './src/index.js'
  },
  plugins: [
    // 生成html，自动引入所有bundle
    new HtmlWebpackPlugin({
      title: 'webpack',
    }),
  ],
  devServer: {
    // 告诉服务器位置。
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 8888,
    hot: true,
    open: true,
    compress: true
  },
}