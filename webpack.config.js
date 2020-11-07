const path = require('path');
const TSL = require('/usr/lib/node_modules/ts-loader');
// path это модуль для работы с путями

module.exports = {
    mode: "development",
    watch: true,
    entry: './js/code.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    devtool: "inline-cheap-source-map",
    watchOptions: {
        ignored: ["node_modules/**"],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3000
      }
};
