const webpack = require("webpack");
const merge = require("webpack-merge");
const path = require("path");
const baseWebpackConfig = require("./webpack.base.conf");
const HTMLPlugin = require("html-webpack-plugin");
const ExtractPlugin = require("extract-text-webpack-plugin");
const VueClientPlugin = require("vue-server-renderer/client-plugin");

const isDev = process.env.NODE_ENV === "development";
console.log(isDev, 909090909090);
const defaultPluins = [
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: isDev ? '"development"' : '"production"'
    }
  }),
  new HTMLPlugin({
    template: path.join(__dirname, "../index.html"),
    filename: "index.html"
  }),
  new VueClientPlugin({})
];

const devServer = {
  port: 8001,
  host: "0.0.0.0",
  overlay: {
    errors: true
  },
  historyApiFallback: true,
  hot: true
};

let config;

if (isDev) {
  config = merge(baseWebpackConfig, {
    devtool: "#cheap-module-eval-source-map",
    devServer,
    plugins: defaultPluins.concat([
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ])
  });
} else {
  config = merge(baseWebpackConfig, {
    entry: {
      app: path.join(__dirname, "../client/client-entry.js"),
      vendor: ["vue", "vue-router"]
    },
    output: {
      filename: "[name].[chunkhash:8].js",
      publicPath: "/public/"
    },
    module: {
      rules: [
        {
          test: /\.styl/,
          use: ExtractPlugin.extract({
            fallback: "vue-style-loader",
            use: [
              "css-loader",
              {
                loader: "postcss-loader",
                options: {
                  sourceMap: true
                }
              },
              "stylus-loader"
            ]
          })
        }
      ]
    },
    plugins: defaultPluins.concat([
      new ExtractPlugin("styles.[contentHash:8].css"),
      new webpack.optimize.CommonsChunkPlugin({
        name: "vendor"
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: "runtime"
      })
    ])
  });
}
module.exports = config;
