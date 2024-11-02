import type { Configuration } from 'node_modules/webpack'
import { iEnvVariables, iMode } from './configuration/webpack/config.types'
import path from 'path'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ruleScripts from './configuration/webpack/rules/scripts'
import ruleFavicon from './configuration/webpack/rules/favicon'
import ruleStyles from './configuration/webpack/rules/styles'
import ruleIconfonts from './configuration/webpack/rules/iconfonts'
import ruleImages from './configuration/webpack/rules/images'
import ruleFonts from './configuration/webpack/rules/fonts'
import watchOptions from './configuration/webpack/watchOptions'
import { EsbuildPlugin } from 'esbuild-loader'
//import HtmlWebpackPlugin from 'html-webpack-plugin'

// import {
//   findImports,
//   processImports,
//   replaceImportsInContent, replaceImportsWithVariables
// } from './configuration/webpack/templateEngine/yate'

function config(env: iEnvVariables): Configuration {
  const mode: iMode = env.mode ?? 'development'
  const isDevelopmentMode: boolean = mode === 'development'
  const isProductionMode: boolean = !isDevelopmentMode

  const rootPath: string = path.resolve(__dirname, './') + '/'

  return {
    mode: mode,
    target: 'browserslist',
    devtool: isDevelopmentMode ? 'source-map' : false,
    optimization: {
      minimize: isProductionMode,
      minimizer: [
        new EsbuildPlugin({
          target: 'es2015',
          css: true,
          legalComments: 'none',
        }),
      ],
    },
    entry: { main: rootPath + 'src/main.ts', },
    output: {
      path: rootPath + 'public/assets',
      filename: 'js/[name].js?v=[contenthash:8]',
      clean: isProductionMode ? {
        keep: 'index.php'
      } : false,
    },
    resolve: {
      alias: { 'src': rootPath + 'src', },
      extensions: [
        '.ts',
        '.js',
        '.json',
        '.wasm',
//        '.ejs'
      ],
    },
    plugins: [
      // new HtmlWebpackPlugin({
      //   template: 'src/views/pages/index.html',
      //   filename: '../index.html',
      //   inject: true,
      //   scriptLoading: 'blocking',
      //   minify: false,
      // }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].css?v=[contenthash:8]',
        chunkFilename: 'css/[name].css?v=[contenthash:8]',
      }),
    ],
    module: {
      rules: [
        // {
        //   test: /\.ejs$/,
        //   use: [
        //     {
        //       loader: 'html-loader',
        //     },
        //     {
        //       loader: 'ejs-loader',
        //       options: {
        //         esModule: true, // позволяет использовать ES модули
        //         variable: 'data', // задает имя переменной, которая будет использоваться в шаблонах
        //       },
        //     },
        //   ],
        // },
        // {
        //   test: /\.html$/i,
        //   loader: 'html-loader',
        //   options: {
        //     minimize: false,
        //     sources: {
        //       list: [
        //         '...',
        //         {
        //           tag: 'img',
        //           attribute: 'data-src',
        //           type: 'src',
        //         },
        //         {
        //           tag: 'img',
        //           attribute: 'data-srcset',
        //           type: 'srcset',
        //         },
        //       ],
        //     },
        //     preprocessor(content, loaderContext) {
        //       const basePath = path.resolve(__dirname, './')
        //       return replaceImportsWithVariables(content)
        //       //return content
        //     }
        //   },
        // },
        ruleFonts(),
        ruleIconfonts(),
        ruleFavicon(),
        ruleImages(),
        ruleStyles(isDevelopmentMode),
        ruleScripts(),
      ],
    },
    watchOptions,
  }
}

export default config
