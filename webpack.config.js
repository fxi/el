/* jshint esversion:6 */
module.exports = {
  mode : 'development',
  entry: './src/index.js',
  output: {
    path: __dirname + '/lib',
    filename: 'index.js'
  },
  module : {
    rules: []
  }
};
