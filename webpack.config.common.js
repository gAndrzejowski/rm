const path = require('path');

const env = process.env.NODE_ENV;

module.exports = {
    mode: env,
    context: path.join(__dirname, 'src'),
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', 'css']
    },
    watch:false,
    devtool: env === "production" ? null : 'inline-source-map'
};
