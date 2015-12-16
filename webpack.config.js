module.exports = {
  entry: "./app/js/init.js",
  output: {
    path: __dirname + "/app",
    filename: "bundle.js"
  },
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
};
