const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const baseConfig = {
    context: path.join(__dirname, 'src'),
    entry: path.join(__dirname, 'src/App.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', 'css']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            // {
            //     test: /\.css$/,
            //     loader: ExtractTextPlugin.extract({ fallback: "style-loader", use: [{
            //         loader: "css-loader",
            //         options: {
            //             modules:true,
            //             localIdentName: '[name]__[local]___[hash:base64:5]'
            //         }}] }),
            // },
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
    plugins: [
        new ExtractTextPlugin({
            filename: "[name].css"
        })
    ],
    watch:false
};

module.exports = env => {
    const customs = env.NODE_ENV === "production" ? {
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                },
                {
                    test: /\.s?[a,c]ss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader'
                    ]
                }
            ]
        },
        plugins: [
            new MinifyPlugin({},{
                test: /\.jsx?$/,
                exclude: /node_modules/
            }),
            new webpack.DefinePlugin({
                'process.end.NODE_ENV': JSON.stringify('production')
            }),
            new MiniCssExtractPlugin({
                filename: '[name].css',
                chunkFilename: '[id].css'
            })
        ]
    } : {
       devtool: 'inline-source-map'
    };
    return Object.assign({},baseConfig, customs);
};