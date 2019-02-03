/* eslint-disable */

// Configuration file for all things Slate.
// For more information, visit https://github.com/Shopify/slate/wiki/Slate-Configuration

const path = require('path');

module.exports = {
  'cssVarLoader.liquidPath': ['src/snippets/css-variables.liquid'],
  
  'webpack.extend': {
    resolve: {
      alias: {
        jquery: path.resolve('./node_modules/jquery'),
        'lodash-es': path.resolve('./node_modules/lodash-es'),
      },
    },
    module: {
      rules: [{
        test: /\.scss$/,
          use: [{
              loader: "sass-loader",
              options: {
                  includePaths: ["node_modules/foundation-sites/scss","node_modules/motion-ui/src"]
              }
          }]
      }]
  }
  },
};
