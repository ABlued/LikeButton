const path = require('path');
const webpack  = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RefreshWebpackPlugin  = require('@pmmmwh/react-refresh-webpack-plugin');      // 데브 서버 사용할 때

module.exports = {
    name: 'LikeButton-setting',
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js','.jsx','.css']
    },
    entry: {
        app: ['./client'],
    },
    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: ['@babel/plugin-proposal-class-properties', 'react-refresh/babel'],
            }
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        }]
    },
    plugins: [
        // 기타 플러그인
        new MiniCssExtractPlugin({ filename: 'app.css' }),
        new RefreshWebpackPlugin
      ],
    
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/'
    },
    devServer: {       // 데브 서버 사용할 때 추가
        publicPath: '/dist/',       // 데브 서버 사용할 때 추가
        hot: true,       // 데브 서버 사용할 때 추가 
    },

};

// 웹팩5로 CSS와 기타 파일 번들링하기 : https://www.zerocho.com/category/Webpack/post/58ac2d6f2e437800181c1657