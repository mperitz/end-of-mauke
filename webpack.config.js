const path = require( 'path' );

const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {

    // entry files
    entry: './src/client/index.ts',

    // output bundles (location)
    output: {
        path: path.resolve( __dirname, 'dist'),
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
                test: /\.ts/,
                use: ['babel-loader', 'ts-loader'],
                exclude: /node_modules/,
                
            },
            {
                test: /\.html$/,
                use: [
                  {
                    loader: "html-loader",
                  }
                ]
            },
        ]
    },

    plugins: [
        new HtmlWebPackPlugin({
          template: "./src/index.html",
          filename: "./index.html"
        })
      ],

    // generate source map
    devtool: 'source-map',
};