module.exports = {
    entry: "./app/assets/frontend/main.jsx",
    output: {
        path: __dirname + "/app/assets/javascripts",
        filename: "bundle.js"
    },
    resolve: {
      extensions: ['', '.js','.jsx']
    },
    externals: {
      'react': 'React'
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: "babel", query:{presets:['react', 'es2015']} }
        ]
    }
};
