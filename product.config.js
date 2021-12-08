const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    products: "./src/products/files/products.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "src/products"),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
    ],
  },
};
