const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/app.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist/js/')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            //以下注释是将变量名调整为Map格式，module：true？是什么意思？变量名转换
            // options: {
            //   sourceMap: true, modules: true,
            //   localIdentName: '[local]_[hash:base64:5]'
            // }
          },
          {
            loader: 'postcss-loader',
            options: {
              // sourceMap: true,
              config: {
                path: 'postcss.config.js'  // 这个得在项目根目录创建此文件
              }
            }
          },
          {
            loader: 'sass-loader',
            //  options: { sourceMap: true }
          }
        ]
      }
    
    ]
  }
};