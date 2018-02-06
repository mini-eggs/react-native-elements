var merge = require('lodash').merge;
var custom = require('./webpack.config');

module.exports = {
  webpack: function(cfg) {
    return merge(cfg, custom);
  },
};
