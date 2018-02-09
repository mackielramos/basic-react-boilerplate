module.exports = env => {
  var webpack = require('webpack');
  var plugins = env.production ? [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          screw_ie8: true,
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true
        },
        output: {
          comments: false
        }
      }),
      new webpack.HashedModuleIdsPlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
    ] : []

  return {
    devtool: env.production ? 'cheap-module-source-map' : 'inline-sourcemap',
    entry: [
      './src/index.js'
    ],
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    devServer: {
      contentBase: './dist',
      historyApiFallback: true,
    },
    plugins: plugins,
  };
}