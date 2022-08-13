const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: 'production',
  entry: "./src/client/index.js", 
  output: {
    path: path.resolve(__dirname, "dist", "assets"),
    filename: "bundle.js", 
    publicPath: "/assets/", // string
    // the url to the output directory resolved relative to the HTML page
  },
  module: {
    // configuration regarding modules
    rules: [
      // rules for modules (configure loaders, parser options, etc.)
      {
        test: /\.jsx?$/,
        //exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }, {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
        patterns: [
          { from: path.resolve(__dirname, "src", "server"), to: path.resolve(__dirname, "dist", "server") },
        ],
      }),
  ],
  // list of additional plugins
}
