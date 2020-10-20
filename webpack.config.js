const path = require('path');
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
};
