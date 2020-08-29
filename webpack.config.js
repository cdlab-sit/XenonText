const path = require('path');

module.exports = [
    {
        entry: './src/index.jsx',
        output: {
            filename: 'renderer.js',
            path: path.resolve(__dirname, 'docs'),
        },
        target:'web',
        resolve: {
            extensions: ['.js', '.jsx']
        },
        module: {
            rules: [{
                test: /\.jsx?$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                loader: 'babel-loader'
            }]
        },
        devServer: {
            contentBase: 'docs'
        }
    }
];