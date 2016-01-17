module.exports = {
  entry: "./src/js/main.js",
  output: {
    path: __dirname + "/build/js",
    filename: "main.js"
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
