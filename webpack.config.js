"use strict";

const path = require("path");
const fs = require("fs");
// Get a list of all HTML files in src/pages
const pages = fs.readdirSync(path.resolve(__dirname, "src/pages"));
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
//const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    bundle: "./src/js/main.js",
  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "source-map",
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 8080,
    hot: true,
    //watchFiles: ["./src/pages/*"],
    watchFiles: {
      paths: ["src/**/*.html", "src/**/*.scss", "src/**/*.js"],
      options: {
        usePolling: true,
      },
    },
  },
  plugins: [
    ...pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, `src/pages/${page}`),
          filename: `pages/${page}`,
          inject: "body", // Load the script at the end of the body tag
          cache: false,
        })
    ),
    new miniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    //new BundleAnalyzerPlugin(),
    new CompressionPlugin({
      algorithm: "gzip",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "src/assets/images", to: "assets/images" }],
    }),
  ],
  resolve: {
    alias: {
      "@images": path.resolve(__dirname, "src/assets/images"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            // Extracts CSS for each JS file that includes CSS
            loader: miniCssExtractPlugin.loader,
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: "css-loader",
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [autoprefixer],
              },
            },
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: "sass-loader",
          },
        ],
      },
      {
        // If we want to be backward compatible with older browsers when it comes to javascript
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  externals: {
    jquery: "jQuery",
  },
};
