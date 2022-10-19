const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const { resolveApp } = require("./path");

module.exports = merge(common, {
  output: {
    path: resolveApp("dist"),
    // bundle文件名称
    filename: "[name].bundle.js",
    // 编译前清除目录
    clean: true,
  },

  mode: "development",
  // 开发环境，开启sourceMap
  devtool: "eval-cheap-module-source-map",
});
