module.exports = {
    entry: "./app/index.js",
    output: {
        path: `${__dirname}/app/build.js`,
        filename: 'build.js'
    },
    devServer: {
        inline: true,
        port: 3000
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                } 
            }
        ]
    }
};