module.exports = {
    entry: "./app/assets/javascripts/main.jsx",
    output: {
        path: __dirname + "/app/assets/javascripts",
        filename: "bundle.js"
    },
    resolve: {
      extensions: ['', '.js','.jsx']
    },
    module: {
        loaders: [
            {
               test: /\.jsx$/,
               loader: "babel",
               exclude: /node_modules/,
               query:{presets:['react', 'es2015']}
             },
             {
                test: /\.css$/,
                loader: "style-loader!css-loader"
              },
              { test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
              }
        ]
    }
};
