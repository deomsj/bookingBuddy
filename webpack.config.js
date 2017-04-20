var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    // 'webpack-dev-server/client?http://localhost:3000',
    './client/src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'client/compiled'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
};