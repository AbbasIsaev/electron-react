import type IForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import * as path from "path";
import {IS_DEV} from "./src/config";
import CopyPlugin = require("copy-webpack-plugin");

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ForkTsCheckerWebpackPlugin: typeof IForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

export const plugins: any = [
    new ForkTsCheckerWebpackPlugin({
        logger: 'webpack-infrastructure',
    }),
];

if (!IS_DEV) {
    // Копирование статических фалов
    const copyPlugin = new CopyPlugin({
        patterns: [
            {
                from: path.resolve(__dirname, 'client', 'build'),
                to: path.resolve(__dirname, '.webpack/renderer')
            }
        ]
    });

    plugins.push(copyPlugin);
}