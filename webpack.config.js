const path = require('path');

module.exports = {
  entry: './src/scripts/ib.js',
  output: {
    path: path.resolve(__dirname, 'docs/assets'),
    filename: 'ib.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'docs'),
    },
    compress: true,
    port: 9000,
    watchFiles: ['src/**/*', 'docs/**/*'],
  },
  mode: 'development',
};
