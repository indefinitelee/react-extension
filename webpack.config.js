module.exports = {
  entry: "./index.js",
  output: {
    filename: "./bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.js$/],
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["react", "babel-preset-es2015"]
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
