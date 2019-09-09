var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry : './index.js',
    output : {
      path: path.resolve(__dirname, "../"),
      filename: "bundle.js"
    },
    module : {
        rules : [
            {test : /\.(js)$/, use:[
      {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/react']
        }
      }
    ]},
            {test : /\.(css|sass|scss)$/, use:['style-loader', 'css-loader', 'sass-loader']}
        ]
    },
    mode:'development',
    plugins : [
        new HtmlWebpackPlugin ({
            template : './index.html'
        })
    ]
};