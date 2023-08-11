import * as path from 'path'

import {NODE_ENV} from './src/config'

import type IForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'

// eslint-disable-next-line import/order
import CopyPlugin = require('copy-webpack-plugin')

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ForkTsCheckerWebpackPlugin: typeof IForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

export const plugins: any = [
    new ForkTsCheckerWebpackPlugin({
        logger: 'webpack-infrastructure'
    }),
    // Копируем shell_scripts в сборку
    new CopyPlugin({
        patterns: [
            {from: './src/shell_scripts/*', to: './'}
        ]
    })
]

if (NODE_ENV === 'production') {
    // Копирование статических файлов
    const copyPlugin = new CopyPlugin({
        patterns: [
            {
                from: path.resolve(__dirname, 'client', 'build'),
                to: path.resolve(__dirname, '.webpack/renderer/build')
            }
        ]
    })

    plugins.push(copyPlugin)
}