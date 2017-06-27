const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './Dependencies/modules/slp.app.js',
    vendor: ['angular']
  },
  output: {
    path: path.join(__dirname, 'Dependencies', 'build'),
    filename: '[name].bundle.js',
    publicPath: "/build/"
  },
  plugins: [
  ],
  devtool: '#inline-source-map',
  module: {
    loaders: [{
      test: /\.html$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'html-loader',
      options: {
        minimize: false
      }
    }]
  }
};