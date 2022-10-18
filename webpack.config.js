const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

// 压缩css
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  // 配置入口文件
  entry: "./src/index.js",
  // 配置输出的代码
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  // 配置如何处理模块
  module: {
    // 配置loader
    rules: [
      {
        test: /\.(scss|sass|css)$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  mode: "development",
  // 配置插件拓展
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  // 设置模块如何解析
  resolve: {
    // 不需要加后缀
    extensions: [".js", ".vue", ".tsx", "jsx", ".json", ".ts"],
    // 配置别名
    alias: {
      "@": "./",
    },
    // 用于配置 npm link 是否生效，禁用可提升编译速度。
    symlinks: false,
  },
  // 用于自定义 webpack 的内置优化配置，一般用于生产模式提升性能
  optimization: {
    // 是否需要压缩 bundle；
    minimize: true,
    // 配置压缩工具
    minimizer: [new CssMinimizerPlugin()],
    // 拆分 bundle；
    splitChunks: {
      chunks: "all",
      // 重复打包问题
      cacheGroups: {
        vendors: {
          //node_modules里的代码
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          //chunks name
          name: "vendors",
          //优先级
          priority: 10,
          enforce: true,
        },
      },
    },
  },
};
