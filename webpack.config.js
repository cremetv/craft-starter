const path = require('path');

module.exports = {
  mode: 'development',
  // mode: 'production',
  devtool: 'source-map',
  entry: {
    main: './web/src/js/main.js',
  },
  output: {
    path: path.resolve(__dirname, 'web/'),
    filename: 'public/js/main.min.js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components|vendor)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ],
  },
};
