const path = require( 'path' );
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {

    // bundling mode
    mode: 'production',

    // entry files
    entry: './src/index.ts',

    // output bundles (location)
    output: {
        path: path.resolve( __dirname, 'dist/js' ),
        filename: 'main.js',
    },

    // file resolutions
    resolve: {
        extensions: [ '.ts', '.js' ],
    },

    // loaders
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: ['babel-loader', 'ts-loader'],
                exclude: /node_modules/,
                
            }
        ]
    },

    // generate source map
    devtool: 'source-map',

    // optimizations
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
};