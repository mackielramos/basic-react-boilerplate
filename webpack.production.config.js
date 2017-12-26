var path = require('path');
var webpack = require('webpack');
var random = Math.random().toString(36).substr(2, 5)

var config = {
  context: path.join(__dirname, "src"),
  entry: "./js/client.js",
  output: {
    path: __dirname + "/src/",
    filename: "client-"+random+".min.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      },
      {
        test: /\.css$/,
        loaders: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.scss$/,
        loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
          'process.env.NODE_ENV': '"production"',
          'process.env.RANDOM': '"'+random+'"',
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};

module.exports = config;