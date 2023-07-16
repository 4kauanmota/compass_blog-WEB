const path = require('path');

module.exports = {
  mode: 'development',

  entry: './src/js/index.ts',

  output: {
    filename: `bundle.js`,
    path: path.resolve(__dirname, '/dist/js'),
  },

  devServer: {
    static: [
      {
        directory: path.join(__dirname),
      },
    ],
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },

  resolve: {
    extensions: ['.ts', '.js'],
  }
}