const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = env => {
  return {
    entry : [ "@babel/polyfill", __dirname + "/app/js" ],
    mode : 'development',
    output : {path : path.join(__dirname, "build"), filename : "bundle.js"},
    module : {
      rules : [
        {
          test : /\.js$/,
          loader : "babel-loader",
          exclude : /node_modules/,
          options : {presets : [ "@babel/preset-env" ]}
        },
        {test : /\.css$/, use : [ "style-loader", "css-loader" ]}, {
          test : /\.scss$/,
          use : [ "style-loader", "css-loader", "sass-loader" ]
        },
        {
          test : /\.(png|woff|woff2|eot|ttf|svg|jpg)(\?.*$|$)/,
          use : [ {loader : "url-loader", options : {limit : 100000}} ]
        }
      ]
    },
    resolve : {
      extensions : [ ".js", ".css", ".scss", ".json" ],
      alias : {
        components : path.resolve(__dirname, "app", "js", "components"),
        logger$ : path.resolve(__dirname, "app", "js", "logger", "index.js"),
        styles : path.resolve(__dirname, "app", "styles")
      }
    },
    plugins : [
      new webpack.ProvidePlugin(
          {$ : "jquery", jQuery : "jquery", Tether : "tether"}),
      new htmlWebpackPlugin(
          {template : path.resolve(__dirname, "app", "index.html")})
    ],
    devServer : {
      contentBase : path.resolve(__dirname, "build"),
      inline : true,
      port : 3000
    },
    devtool : "source-map"
  };
};
