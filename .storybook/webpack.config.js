const path = require('path')
// var webpack = require('webpack');

const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { storyLoader } = require("vue-storybook")

module.exports = (baseConfig, env, defaultConfig) => {

  defaultConfig.plugins.push(new VueLoaderPlugin())
  defaultConfig.module.rules[1].options = {
    loaders: {
      story: storyLoader // Add!
    }
  };

  return defaultConfig;
};
