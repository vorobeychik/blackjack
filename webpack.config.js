console.log('вебпак')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    module: {
        loaders: [
            {
                test: /\.obj$/,
                loader: 'webpack-obj-loader'
            },
            {
                test: /\.obj$/,
                loader: 'url-loader',
            },
            {
                test: /\.obj$/,
                loader: 'file-loader',
                include: paths.obj
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
}