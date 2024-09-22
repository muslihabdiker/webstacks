const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const JavaScriptObfuscator = require('webpack-obfuscator');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    signup: path.resolve(__dirname, 'src/assets/js/signup.js'),
    login: path.resolve(__dirname, 'src/assets/js/login.js'),
    dashboard: path.resolve(__dirname, 'src/assets/js/dashboard.js'),
    forgot: path.resolve(__dirname, 'src/assets/js/forgot.js'),
    onboardingf1: path.resolve(__dirname, 'src/assets/js/onboardingf1.js'),
  },
  output: {
    filename: '[name]/js/[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'app'),
    assetModuleFilename: '[name]/images/[name].[contenthash][ext]',
  },
  mode: 'development', // Set to development mode
  devtool: 'eval-source-map', // Better source map for development
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: '[name]/images/[name].[contenthash][ext]',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'signup/index.html',
      template: path.resolve(__dirname, 'src/layouts/signup.html'),
      chunks: ['signup'],
      minify: false,
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      filename: 'login/index.html',
      template: path.resolve(__dirname, 'src/layouts/login.html'),
      chunks: ['login'],
      minify: false,
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      filename: 'dashboard/index.html',
      template: path.resolve(__dirname, 'src/layouts/dashboard.html'),
      chunks: ['dashboard'],
      minify: false,
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      filename: 'onboardingf1/index.html',
      template: path.resolve(__dirname, 'src/layouts/onboardingf1.html'),
      chunks: ['onboardingf1'],
      minify: false,
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      filename: 'forgot/index.html',
      template: path.resolve(__dirname, 'src/layouts/forgot.html'),
      chunks: ['forgot'],
      minify: false,
      inject: 'body',
    }),
    new MiniCssExtractPlugin({
      filename: '[name]/css/styles.[contenthash].css',
    }),
    // You might want to disable obfuscation in development for easier debugging
    // new JavaScriptObfuscator({
    //   rotateStringArray: true,
    // }, ['signup/js/signup.[contenthash].bundle.js', 'login/js/login.[contenthash].bundle.js', 'dashboard/js/dashboard.[contenthash].bundle.js']),
  ],
  optimization: {
    minimize: false, // Disable minimization in development
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: 'single',
  },
  cache: {
    type: 'filesystem',
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'app'),
    },
    compress: true,
    port: 9000,
    open: true,
    hot: true, // Enable hot module replacement
    proxy: {
      '/api': {
        target: '57.152.70.224:18081', // Replace with your backend IP and port
        changeOrigin: true,
        pathRewrite: {
          '^/api': '', // Remove /api from the request path
        },
      },
      '/api': {
        target: '57.152.70.224:18082', // Replace with your backend IP and port
        changeOrigin: true,
        pathRewrite: {
          '^/api': '', // Remove /api from the request path
        },
        '/api': {
          target: '57.152.70.224:18083', // Replace with your backend IP and port
          changeOrigin: true,
          pathRewrite: {
            '^/api': '', // Remove /api from the request path
          },
        },
      },
    },
  },
};
