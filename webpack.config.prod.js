const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',

  entry: {
    index: './src/js/index.ts',
    post: './src/js/post/post.ts'
  },
  
  output: {
    filename: `[name].bundle.js`,
    path: path.resolve(__dirname, 'dist/js'),
    publicPath: '/dist/'
  },

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