const path = require('path');

const config = {

    entry: {
        app: ['babel-polyfill','./app/index.js']
    },

    output: {
        path: path.resolve('./dist'),
        filename: 'bundle.js',
        publicPath:'/'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude:/node_modules/,
                use:['babel-loader']
            }
        ]
    },

    devServer: {
        port:3001,
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true
    }

}

module.exports = config;