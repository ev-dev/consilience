const path = require('path')
const webpack = require('webpack')
const LiveReloadPlugin = require('webpack-livereload-plugin')

const isDev = true

const config = {
  entry: path.join(__dirname, 'src', 'app', 'index'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.jsx', '.js', '.json', '.css', '.scss', '*'],
    alias: {
      '~': __dirname
    }
  },
  devServer: {
    publicPath: path.join('/dist/')
  },
  module: {
    rules: [{
      test: /jsx?$/,
      include: path.join(__dirname, 'src', 'app'),
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react-app']
      }
    }, 
    {
      test: /\.(jpeg|jpg|png)$/,
      use: 'url-loader'
    },
    {
      test: /\.(css|scss|sass)$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }, {
        loader: "sass-loader"
      }]
    }]
  },
  plugins: isDev
    ? [
        new LiveReloadPlugin({
          appendScriptTag: true
        })
      ]
    : []
}

module.exports = config