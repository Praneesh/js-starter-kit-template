import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default{
    debug: true,
    devtool: 'source-map',
    noInfo: false,
    entry:{
        vendor: path.resolve(__dirname,'src/vendor'),
        main: path.resolve(__dirname,'src/index')
    },
    target:'web',
    output:{
        path: path.resolve(__dirname,'dist'),
        publicPath:'/',
        filename: '[name].[chunkhash].js'
        // This tells webpack to use the names we used in "entry" module above (vendor, main etc.)
        // The 'chunkhash' variable is released by WebpackMd5Hash
    },
    plugins:[
        // Generate an external CSS file with a hash in the file name
        new ExtractTextPlugin('[name].[contenthash].css'),

        // Hash the files using MD5 so that their names change when the content changes.
        // This would helpto burst cache (cache-bursting) so that the end user's browsers would
        // be forced to download the changed the files from server, instead of serving them from cache
        new WebpackMd5Hash(),

        // CommonChunksPlugin to create a seperate bundle
        // of vendor libraries so that they are cached seperately.
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'  // This name should be same as the name given in "entry" module above
        }),

        // Dynamically create an HTML file that includes reference to bundled JS
        new HtmlWebpackPlugin({
            template:'src/index.html',
            minify:{
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            },
            inject:true,
            trackJSToken:'ebb68eccfc514ab8afe77f5b36c84838'
        }),

        // Eliminate duplicate packages when generating bundle
        new webpack.optimize.DedupePlugin(),

        //Minify JS
        new webpack.optimize.UglifyJsPlugin()
    ],
    module:{
        loaders:[
            {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
            {test: /\.css$/,loader: ExtractTextPlugin.extract('css?sourceMap')}
        ]
    }
}
