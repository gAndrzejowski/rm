const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.config.common');

const clientConfig = {
    name: 'client',
    target: 'web',
    entry: ['babel-polyfill', path.join(__dirname, 'src/client.js')],
    output: {
        filename: 'bundle.js',
        path: path.resolve('./dist')
    },
    module: {
        rules: [
            {
                test: /\.s?[a,c]ss$/,
                loader: ExtractTextPlugin.extract({ fallback: "style-loader", use: [{
                        loader: "css-loader",
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }}, "sass-loader"] }),
            }
        ]
    },
    plugins: process.env.NODE_ENV === "production" ? [
            new MinifyPlugin({},{
                test: /\.jsx?$/,
                exclude: /node_modules/
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production')
            }),
            new MiniCssExtractPlugin({
                filename: '[name].css',
                chunkFilename: '[id].css'
            })]
         : [
            new ExtractTextPlugin({
                filename: "[name].css"
            }),]
};
module.exports = merge(common, clientConfig);

