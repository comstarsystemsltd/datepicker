const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const WebpackBundleAnalyzer = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = (env, argv) => {
  return merge(common(env, argv), {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      hot: true,
      host: "localhost",
      liveReload: true,
      open: true,
    },
    plugins: [
      new WebpackBundleAnalyzer()
    ]
  })
};

