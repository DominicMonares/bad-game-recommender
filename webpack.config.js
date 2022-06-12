const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '/src/web/client/src/index.jsx'),
  output: {
    filename: 'main.js',
    path: path.join(__dirname, '/src/web/client/dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ]
  }
}
