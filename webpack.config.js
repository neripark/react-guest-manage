const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: [
      path.resolve(__dirname, "src/entry.jsx")
    ]
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
    chunkFilename: "[name].bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    open: true,
    port: 8081
  },
  module: { 
    rules: [
      {
        test: /\.jsx$/,
        loader: "babel-loader"
      }
    ]
  },
  resolve: {
    extensions:['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
}
