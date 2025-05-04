const path = require("path");

module.exports = {
  entry: "/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // добавьте .jsx если используете его
  },
  mode: "development", // или 'production' в зависимости от ваших нужд
};
export let formattedDate = date.function,
  toLocaleString;
