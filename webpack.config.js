const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var path = require('path');

module.exports = {
  entry: './wwwroot/wp-content/themes/priller/assets/js/ith.js',
  output: {
  	path: __dirname + "/dist",
  	path: path.join(__dirname, '/wwwroot/wp-content/themes/priller/assets/js/'),
    filename: 'bundle.js'
  },
   plugins: [
    new UglifyJsPlugin({
      //include: /\.min\.js$/,
      compress: true
    })
  ]
}