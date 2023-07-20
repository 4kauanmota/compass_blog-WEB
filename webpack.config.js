const path = require('path');

module.exports = {
  mode: 'development',

  entry: {
    index: './src/js/index.ts',
    post: './src/js/post/post.ts'
  },

  devServer: {
    static: [
      {
        directory: path.join(__dirname),
      },
    ],
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
  }
}