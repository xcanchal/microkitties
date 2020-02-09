const dotenv = require('dotenv');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

dotenv.config();
const src = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');

const {
  NODE_ENV: environment,
  HOST: host = '0.0.0.0',
  PORT: port = 9001
} = process.env;

module.exports = () => ({
  mode: environment === 'development' ? 'development' : 'production',
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
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      { test: /\.js$/, use: { loader: 'babel-loader' } },
    ],
  },
  optimization: {},
  devServer: {
    host,
    port,
    contentBase: dist,
    compress: true,
    historyApiFallback: true,
    disableHostCheck: true,
  },
});