const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      
    ],

    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
  };
};


// TODO: Add and configure workbox plugins for a service worker and manifest file.
plugins: [
  new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
  }),
  new WebpackPwaManifest({
    name: 'PWA Text Editor',
    short_name: 'Text Editor',
    description: 'A progressive web app text editor',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: path.resolve('src/assets/icon.png'),
        sizes: [96, 128, 192, 256, 384, 512],
        destination: path.join('assets', 'icons'),
      },
    ],
  }),
  new InjectManifest({
    swSrc: './src/service-worker.js',
  }),
],
