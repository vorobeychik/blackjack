
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {

    plugins: [

        ...

            new CopyPlugin({
                patterns: [
                    {
                        from: path.resolve(__dirname, '/src/assets/sound'),
                        to: path.resolve(__dirname, 'dist')
                    }
                ]
            }),
    ]
};