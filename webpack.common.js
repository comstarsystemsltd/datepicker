const pkg = require('./package.json');
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = ()=>{

    return {
        entry: path.join(__dirname, "src", "index.js"),
        output: {
          filename: `${pkg.name}.js`,
          library: pkg.name.charAt(0).toUpperCase() + pkg.name.slice(1),
          path:path.resolve(__dirname, "dist"),
          globalObject: '(typeof self !== \'undefined\' ? self : this)', // TODO Hack (for Webpack 4+) to enable create UMD build which can be required by Node without throwing error for window being undefined (https://github.com/webpack/webpack/issues/6522)
          umdNamedDefine: true,
          libraryTarget: 'umd',
        },
        plugins: [
          new HtmlWebpackPlugin({
            template: "./index.html",
          }),
        ],
        module: {
          rules: [
            {
              test: /\.?js$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: ['@babel/preset-env', '@babel/preset-react']
                }
              }
            },
          ]
        },
      }
}