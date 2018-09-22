let path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require("webpack");

module.exports = {
    entry: './src/app/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
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
            // {
            //     test: /\.scss$/,
            //     loader:'style-loader!css-loader!postcss-loader!sass-loader'
            // },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: ['css-loader','postcss-loader','sass-loader']
                    })
            },
            // {
            //     test : / ^ ( ?! . * \. generated \. ttf $ ) . * \. ttf $ / ,
            //     use : [ ' css-loader ' , ' fontface-loader ' ] ,
            // } ,
            // {
            //     test: /\.generated.(ttf|eot|woff|woff2)$/,
            //     use: [{
            //         loader: 'file-loader',
            //         options: {
            //             outputPath: '/fonts/',
            //         },
            //     }],
            // },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: '/fonts/',
                    },
                }],
            },
            // {
            //     test: /\.(woff|woff2|eot|ttf|otf)$/,
            //     use: [{
            //         loader: 'file-loader',
            //         options: {
            //             outputPath: '/images/',
            //         },
            //     }],
            // }
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=./fonts/[name].[ext]'
            }
        ]
    },


    plugins: [
        new ExtractTextPlugin({filename: 'style.css'}),
        require('autoprefixer'),
    ]
};
