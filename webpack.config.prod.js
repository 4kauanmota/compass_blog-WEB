const path = require('path');
const plugin = require('clean-webpack-plugin');
const { CleanPlugin } = require('webpack');

module.exports = {
  mode: 'production',

  entry: './src/js/app.ts',

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

  devtool: 'none',

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
  },

  plugins: [
    new CleanPlugin.CleanWebpackPlugin(),
  ]
}