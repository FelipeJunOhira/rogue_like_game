// Karma configuration
// Generated on Tue Dec 15 2015 23:01:37 GMT-0200 (BRST)

var webpackConfig = require('./webpack.config');

module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: [
      'tests.webpack.js'
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap']
    },
    reporters: ['dots'],
    webpack: {
      devtool: 'inline-source-map',
      resolve: {
        alias: {
          'src': __dirname + '/src'
        }
      },
      module: webpackConfig.module
    },
    webpackServer: {
      noInfo: true
    }
  });
}
