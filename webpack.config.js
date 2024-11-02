const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const PostcssPresetEnv = require('postcss-preset-env');

module.exports = {

  // Входной файл
  entry: [
    './src/app/index.js'
  ],

  // Выходной файл
  output: {
    filename: './js/bundle.js',
    clean: true,
  },

  // Source maps для удобства отладки
  devtool: "source-map",

  module: {
    rules: [
      // Транспилируем js с babel
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      },

      // Компилируем SCSS в CSS
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader, // Extract css to separate file
          'css-loader', // translates CSS into CommonJS
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: [
                  PostcssPresetEnv({
                    browsers: 'last 3 versions',
                    autoprefixer: { grid: 3 },
                  })
                ]
              }
            }
          },
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
      },

      // Подключаем шрифты из css
      // {
      //   test: /\.(eot|ttf|woff|woff2)$/,
      //   use: [
      //     {
      //       loader: 'file-loader?name=./fonts/[name].[ext]'
      //     },
      //   ]
      // },

      // Подключаем картинки из css
      // {
      //   test: /\.(svg|png|jpg|jpeg|webp)$/,
      //   use: [
      //     {
      //       loader: 'file-loader?name=./static/[name].[ext]'
      //     },
      //   ]
      // },
    ],
  },
  plugins: [
    // Подключаем файл html, стили и скрипты встроятся автоматически
    new HtmlWebpackPlugin({
      title: 'Услуги и сервисы',
      template: './src/app/index.html',
      favicon: './src/app/favicon.svg',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      }
    }),

    // Кладем стили в отдельный файлик
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),

    // Копируем картинки
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/assets/img',
          to: 'img',
        },
        {
          from: './src/assets/fonts',
          to: 'fonts',
        },
      ]
    })
  ],
};
