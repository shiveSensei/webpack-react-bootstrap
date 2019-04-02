const path = require("path");
const devMode = process.env.NODE_ENV !== "production";
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./ClientApp/src/index.js",
  output: {
    path: path.join(__dirname, "/ClientApp/dist"),
    filename: "index_bundle.js"
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      //bable compiler rule, check for any js, jsx files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      //rule for loading stylesheets, and applying css styles
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: devMode ? "style-loader" : MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            options: {
              modules: true
              // importLoaders: 1
            }
          },
          "sass-loader"
        ]
      },
      //rule for loading images
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./ClientApp/public/index.html"
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? "[name].css" : "[name].[hash].css",
      chunkFilename: devMode ? "[id].css" : "[id].[hash].css"
    })
  ]
};
