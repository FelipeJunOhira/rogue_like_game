// Karma configuration
// Generated on Tue Dec 15 2015 23:01:37 GMT-0200 (BRST)

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
      module: {
        loaders: [
          {
            test: /\.jade$/,
            loader: "jade"
          },
          {
            test: /\.sass$/,
            loaders: ["style", "css", "sass"]
          }
        ]
      }
    },
    webpackServer: {
      noInfo: true
    }
  });
}
