
var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: path.join(__dirname),
    devtool: false,
    entry: ['./src/root.js'],
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
    plugins: [
        /* 插件 extract-text-webpack-pluginfor OccurenceOrder, UglifyJS plugins, ExtractTextPlugin */
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.BannerPlugin('大Q版权所有，翻版必究'),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
    ],
};
