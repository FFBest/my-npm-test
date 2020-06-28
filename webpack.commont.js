const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "development", //打包为开发模式 production | development
  // entry: "./common.js",
  //entry: entries(),
  entry: Object.assign({
    commont: `${path.join(__dirname, "./")}common.js`
  }, {
    // 用到什么公共lib（例如jquery.js），就把它加进vendor去，目的是将公用库单独提取打包
    // 'vendor': ['jquery']
  }),
  output: {
    path: path.join(__dirname, "../../dist"),
    filename: "[name].js"
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery',
      _: 'lodash'
    })
  ]
}
