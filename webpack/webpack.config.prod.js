// Core
import path from 'path';
import webpackMerge from 'webpack-merge';
import webpackBaseConfig from './webpack.config.base';

// Plugins
import TerserWebpackPlugin from 'terser-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

// Webpack config
export default webpackMerge(
  webpackBaseConfig,
  {
    mode: 'production',
    devtool: false,
    optimization: {
      minimizer: [
        new TerserWebpackPlugin({
          terserOptions: {
            output: {
              comments: false
            }
          }
        })
      ],
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

              switch (packageName) {
                case 'react':
                case 'react-dom': {
                  return packageName;
                }
                default: {
                  return 'libs';
                }
              }
            }
          }
        }
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        template: path.resolve(__dirname, '../public/index.html'),
        title: 'Tic-Tac-Toe',
        favicon: path.resolve(__dirname, '../public/favicon.ico'),
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true
        }
      })
    ]
  }
);
