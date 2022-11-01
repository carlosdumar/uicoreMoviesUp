const path = require('path')
const nodeExternals = require('webpack-node-externals')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const isProductionMode = process.env.NODE_ENV === "production";

module.exports = {
    mode: isProductionMode ? 'development' : 'production',
    entry: {
        index: './src/index.ts',
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name]-[id].css'
        }),
        new ForkTsCheckerWebpackPlugin()
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        libraryTarget: 'umd'
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: isProductionMode ? MiniCssExtractPlugin.loader : 'style-loader',
                        options: { }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]--[local]'
                            }
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    "postcss-preset-env",
                                    "postcss-import",
                                    "postcss-mixins",
                                    "postcss-nested"
                                ]
                            }
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack']
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: { transpileOnly: !isProductionMode }
            },
            {
                test: /\.ya?ml$/,
                type: 'json',
                use: [
                    {
                        loader: 'yaml-loader',
                        options: {
                            asJson: true
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    }
}