const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container
const path = require('path')

module.exports = (_, argsv) => ({
  devServer: {
    port: 8080,
  },
  output: {
    publicPath: argsv.mode === 'development' ? 'http://localhost:8080/' : 'https://prod-test-host.vercel.app/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react']
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'app2',
      library: { type: 'var', name: 'app2' },
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App'
      },
      shared: ['react', 'react-dom']
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
})
