const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './js/script.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
        { test: /\.jpg$/, loader: 'file-loader'},
        { test: /\.png$/, loader: 'file-loader'},
        { test: /\.less$/, use: [{ loader: "style-loader" }, { loader: "css-loader" }, { loader: "less-loader" }] }
      ]
    }
};