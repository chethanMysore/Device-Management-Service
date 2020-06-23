var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './app.js',
    output: {path: __dirname + '/src',filename: 'bundle.js'},
    module: {
    },
    devServer: {
    port: 3000
  }
}
