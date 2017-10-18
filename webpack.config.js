module.exports = {
  entry: "./src/App.js",
  output: {
    filename: "./public/bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.js$/],
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015"]
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
