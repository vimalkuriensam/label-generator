const path = require("path");

const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-cheap-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    publicPath: "/dist/",
    compress: true,
    port: 4200,
    historyApiFallback: true,
  },
});
