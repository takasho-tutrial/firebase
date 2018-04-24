const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: {
    main: path.join(__dirname, 'src/index.ts')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.vue', '.js'],
    alias: {
      vue$: 'vue/dist/vue.common.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}
