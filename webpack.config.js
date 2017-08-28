var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: path.join(__dirname),
    entry: './src/root.js',
    devtool: 'eval-source-map',
    devServer: {
        inline: true, //实时刷新
        historyApiFallback: true //不跳转
    },
    module: {
        loaders: [{
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!autoprefixer-loader'
            },
            {
                test: /\scss$/,
                loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
            }
        ]
    },
    output: {
        path: __dirname,
        filename: './src/bundle.js'
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
    ],
};