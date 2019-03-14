const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const common = require('./common');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, '../docs'),
        compress: true,
        port: 9000, 
        watchContentBase: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'ES6 Accordion component',
            template: './public/index.html'
        })
    ]
});