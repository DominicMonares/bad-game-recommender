const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '/src/web/client/src/index.js'),
  output: {
    filename: 'main.js',
    path: path.join(__dirname, '/src/web/client/dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env','@babel/preset-react'] },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: 'assets/logo.png',
        }
      }
    ]
  }
}
