const path = require('path')

module.exports = {
    devtool: 'eval-source-map',
    entry: path.join(__dirname, "app/main.js"),
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        inline: true
    }
}