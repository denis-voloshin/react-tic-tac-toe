// Core
import webpack from 'webpack';
import path from 'path';
import webpackMerge from 'webpack-merge';
import webpackBaseConfig from './webpack.config.base'

// Plugins
import HtmlWebpackPlugin from 'html-webpack-plugin';

// Webpack config
export default webpackMerge(
  webpackBaseConfig,
  {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      open: true,
      port: process.env.PORT || 3000
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        template: path.resolve(__dirname, '../public/index.html'),
        title: 'Tic-Tac-Toe',
        favicon: path.resolve(__dirname, '../public/favicon.ico')
      }),
      new webpack.HotModuleReplacementPlugin()
    ]
  }
);
