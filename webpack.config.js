// const path = require('path');
// module.exports = {
//     entry: "./app/assets/frontend/main.jsx",
//     output: {
//         path: __dirname + "/app/assets/javascripts",
//         filename: "bundle.js"
//     },
//     resolve: {
//       extensions: ['', '.js','.jsx']
//     },
//     module: {
//         loaders: [
//             {
//                test: /\.jsx?$/,
//                loader: "babel-loader",
//                exclude: /node_modules/,
//                query:{
//                  presets:['react', 'es2015']
//                }
//              },
//              {
//                 test: /\.css$/,
//                 loader: "style-loader!css-loader"
//               },
//               { test: /\.(png|woff|woff2|eot|ttf|svg)$/,
//                 loader: 'url-loader?limit=100000'
//               },
//               {
//                 test: /\.js/,
//                 loader: 'babel-loader',
//                 include: path.join(__dirname, 'src'),
//                 query: {
//                   presets: ['airbnb']
//                 }
//               },
//               {
//                 test: /\.jsx/,
//                 loader: 'babel-loader',
//                 include: path.join(__dirname, 'src'),
//                 query: {
//                   presets: ['airbnb']
//                 }
//               },
//               // react-svg loads svg files as react components
//               {
//                 test: /\.svg$/,
//                 loader: 'babel!react-svg',
//                 include: path.join(__dirname, 'src')
//               },
//         ]
//     }
// };
