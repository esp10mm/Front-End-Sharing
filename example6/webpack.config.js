var webpack = require('webpack');
var path = require('path');
var WriteFileWebpackPlugin = require('write-file-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  devtool: 'source-map',
  debug: true,
  output: {
    path: 'build',
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  devServer: {
    contentBase: 'build',
    outputPath: path.join(__dirname, './build'),
  },
  resolve: {
    alias: {
      app: path.join(__dirname, '..', 'app'),
    }
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'eslint',
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
        }
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.svg$/,
        loader: 'icons-loader'
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.DEBUG': '"*"'
    }),
    // new CopyWebpackPlugin([
    //   { from: './assets' , to: '.' },
    // ]),
    new webpack.NoErrorsPlugin(),
    new WriteFileWebpackPlugin(),
    // new ExtractTextPlugin('app.css', {
    //     allChunks: true
    // }),
  ]
};


