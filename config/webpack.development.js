const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonCfg =require('./webpack.common');

const developmentCfg = {
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: true
    })
  ]
};

module.exports = webpackMerge(commonCfg, developmentCfg);