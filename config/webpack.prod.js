const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const { resolveApp } = require("./path");

module.exports = merge(common, {
  output: {
    path: resolveApp("dist"),
    // bundle文件名称
    filename: "[name].[contenthash].bundle.js",
    // 编译前清除目录
    clean: true,
  },
  mode: "production",
});
