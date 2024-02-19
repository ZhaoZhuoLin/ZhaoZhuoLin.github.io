const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
//优化和压缩css
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const { VueLoaderPlugin } = require("vue-loader")
const ESLintPlugin = require("eslint-webpack-plugin")
const webpack = require("webpack")

module.exports = {
  plugins: [
    //引入vue-loader,让webpack识别vue
    new ESLintPlugin({
      extensions: ["js", "ts", "vue"]
    }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/index.html"),
      filename: "index.html",
      inject: "body"
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new OptimizeCssAssetsWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  // 入口起点
  entry: "./src/index.js",
  // 输出目录
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "./dist"),
    clean: true
  },
  devServer: {
    static: "./dist",
    //是否开启热更新
    hot: true,
    //是否开启页面
    open: true
  },
  optimization: {
    minimizer: []
  },
  // loader
  module: {
    rules: [
      {
        //匹配规则(正则验证)
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              publicPath: "./image", // 相对打包后的index.html的图片位置
              outputPath: "image/", // 输出到dist的目录image下
              // 图片小于 10kb,会被 base64处理
              limit: 10 * 1024,
              // 解决：关闭url-loader的es6模块化，使用commonjs解析
              esModule: false
            }
          }
        ]
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: ["@babel/plugin-transform-runtime"]
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  mode: "development"
}
