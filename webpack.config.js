const path = require('path');

module.exports = [
  {
    entry:{
      main: './src/main/index.js',
    },
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    target:'electron-main',
    module: {
      rules: [{
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel-loader'
      }]
    }
  },
  {
    entry: './src/index.js',
    output: {
      filename: 'renderer.js',
      path: path.resolve(__dirname, 'dist'),
    },
    target:'electron-renderer',
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [{
        test: /\.jsx?$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel-loader'
      }]
    }
  }
];