var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/public');

module.exports = {
  mode: 'development',
  entry: `${SRC_DIR}/index.js`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  optimization: {
    runtimeChunk: {
      name: "vendor"
    }
  },
  module : {
    rules : [
      {
        test : /\.js?/,
        include : SRC_DIR,
        loader : 'babel-loader',
        query: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      }
    ]
  }
};