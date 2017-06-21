module.exports = {
    entry: "./app/index.js",
    output: {
        path: __dirname,
        filename: 'build.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                } 
            }
        ]
    }
};