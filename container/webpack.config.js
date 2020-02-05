const dotenv = require('dotenv');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

dotenv.config();
const src = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');

const {
  HOST: host = '0.0.0.0',
  PORT: port = 9000
} = process.env;

module.exports = () => ({
  entry: {
    app: `${src}/index.js`,
  },
  output: {
    path: dist,
    publicPath: '/',
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({ template: `${src}/index.html` }),
  ],
  module: {
    rules: [
      { test: /\.js$/, use: { loader: 'babel-loader' } },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: {
          chunks: 'all',
          test: /[\\/]node_modules[\\/]/,
          priority: 0,
        },
        'react-vendors': {
          chunks: 'all',
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
          priority: 1
        },
      },
    },
  },
  devServer: {
    host,
    port,
    contentBase: dist,
    compress: true,
    historyApiFallback: true,
    disableHostCheck: true,
  },
});