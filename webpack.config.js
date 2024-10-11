const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const dotenv = require('dotenv');
//const webpack = require('webpack');
//dotenv.config();
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
    //new webpack.DefinePlugin({
     // 'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
   // })
   new Dotenv({
    path: './.env', // Path to .env file (this is the default)
    safe: true, // load .env.example (defaults to "false" which does not use dotenv-safe)
  })

  ],
  module: {
    rules: [
      {
        test: /.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};