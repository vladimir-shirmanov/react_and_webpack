const path = require('path')

module.exports = {
    devtool: 'eval-source-map',
    entry: path.join(__dirname, "app/main.js"),
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js"
    },
    
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        inline: true
    }
}