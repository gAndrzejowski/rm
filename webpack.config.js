const path = require('path');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: path.join(__dirname, 'src/App.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.jsx']
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
                use: ["style-loader", "css-loader"]
                // loader: ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader" })
            },
            {
                test: /\.s[a,c]ss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
                // loader: ExtractTextPlugin.extract({ fallback: "style-loader", use: ["css-loader", "sass-loader"] })
            }
        ]
    },
    // plugins: [
        // new ExtractTextPlugin("[name].css")
    // ],
    watch:false
};