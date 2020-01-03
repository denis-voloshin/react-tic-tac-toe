// Environment
import dotenv from 'dotenv';

dotenv.config({
  path: path.resolve(__dirname, '../.env')
});

// Core
import path from 'path';

// Plugins
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

// Webpack config
export default {
  context: path.resolve(__dirname, '../src'),
  entry: {
    app: ['@babel/polyfill', './index.jsx']
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'static/js/[name].[hash:10].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(png|jpe?g|gif|bmp)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                  outputPath: 'static/img',
                  name: '[name].[hash:10].[ext]'
                }
              }
            ]
          },
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  configFile: path.resolve(__dirname, 'babel.config.js')
                }
              }
            ]
          },
          {
            exclude: [/\.(png|jpe?g|gif|bmp)$/i, /\.jsx?$/, /\.html$/, /\.json$/],
            loader: 'file-loader',
            options: {
              name: 'static/media/[name].[hash:10].[ext]'
            }
          }
        ]
      }
    ]
  }
};
