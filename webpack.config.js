const path = require('path');

module.exports = {
    mode: "development",
    watch: true,
    entry: './js/code.js',
    devtool: "inline-cheap-source-map",
    watchOptions: {
        ignored: ["node_modules/**"],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js'
    },
};
