let path = require('path'),
 ExtractTextPlugin = require('extract-text-webpack-plugin'),
 autoprefixer = require('autoprefixer');


module.exports = {
    entry: './src/app/index.js',
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: 'main.js',
        publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: ['css-loader', 'sass-loader']
                    })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({filename: 'style.css'})
    ]
};
