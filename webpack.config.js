const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
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
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({ fallback: "style-loader", use: ["css-loader"] })

            },
            {
                test: /\.s[a,c]ss$/,
                loader: ExtractTextPlugin.extract({ fallback: "style-loader", use: ["css-loader", "sass-loader"] })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "style.css"
        })
    ],
    watch:false
};