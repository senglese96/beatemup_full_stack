const path = require('path');

module.exports = {
    entry: './frontend/beat_em_up.jsx',
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'), // NEW
        filename: './bundle.js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            }
        ]
    },
    resolve: {
        extensions: [".js", '.jsx', '*']
    }
};
