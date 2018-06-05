const path = require('path');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.config.common');

const serverConfig = {
    name: 'server',
    target: 'node',
    entry: ['babel-polyfill', path.join(__dirname, 'src/server.js')],
    externals: [nodeExternals()],
    output: {
        filename: 'ssr.js',
        libraryTarget: 'commonjs2',
        path: path.resolve('./dist')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
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

module.exports = merge(common, serverConfig);