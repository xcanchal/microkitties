const dotenv = require('dotenv');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

dotenv.config();
const src = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');

const {
  NODE_ENV: environment,
  HOST: host = '0.0.0.0',
  PORT: port = 9000
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
    // so we can request the microfrontends from the development host publicPath
    new CopyPlugin([
      { from: './micro-frontends', to: `${dist}/micro-frontends` },
    ]),
    new CleanWebpackPlugin(),
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
    /* proxy: {
      'http://localhost:9000/Cats': {
        bypass: (req, res) => {
          res.send('hey yo');
        },
      },
    }, */
  },
});