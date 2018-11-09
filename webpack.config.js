const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const pathsToClean = [
  'build'
]

const cleanOptions = {
  root: __dirname,
  verbose: true,
  dry: false,
  exclude: ['production-dependencies.bundle.js']
}


module.exports = {
  entry: {
    app: './src/index.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },

  optimization: {
      splitChunks: {
        cacheGroups: {
          default: false,
          vendors: false,

          // vendor chunk
          vendor: {
            // sync + async chunks
            chunks: 'all',
            name: 'production-dependencies.bundle',
            // import file path containing node_modules
            test: /node_modules/
          }
        }
      }
  },

  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'build'),
    chunkFilename: '[name].js',
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
  },

  plugins: [
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname + '/src', 'index.html'),
        to: path.resolve(__dirname, 'build')
      },
      {
        from: path.resolve(__dirname + '/src', 'assets'),
        to: path.resolve(__dirname, 'build/assets')
      }
    ]),
    new webpack.DefinePlugin({
      'typeof CANVAS_RENDERER': JSON.stringify(true),
      'typeof WEBGL_RENDERER' : JSON.stringify(true)
    }),
  ]

};