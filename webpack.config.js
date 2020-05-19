var path = require("path");
var BundleTracker = require('webpack-bundle-tracker');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  context: __dirname,

  entry: './mysite/polls/static/js/index',

  output: {
      path: path.resolve('./mysite/polls/static/bundles/'),
      filename: "[name]-[hash].js",
  },

  plugins: [
    new BundleTracker({filename: './mysite/webpack-stats.json'}),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }

};