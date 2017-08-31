var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: path.join(__dirname),
    entry: './src/root.js', // 唯一入口文件
    devtool: 'eval-source-map', //生成source map, 只在开发阶段使用
    devServer: {
        inline: true, //实时刷新
        historyApiFallback: true //不跳转
    },
    module: {
        loaders: [{ //感叹号的作用在于同一文件能够使用不同类型的loader, 对不同样式表的处理
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
    // resolve: {
    //     extensions: ['.js', '.css', '.scss', '.jsx'] //自动补全识别后缀
    // },
    output: { //打包输出的文件名
        path: __dirname,
        filename: './src/bundle.js' 
    },
    plugins: debug ? [] : [
        new webpack.BannerPlugin('大Q版权所有'),
        new webpack.optimize.DedupePlugin(),
    ],
};