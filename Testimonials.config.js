const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    products: "./src/Testimonials/files/Carousel.js",
  },
  output: {
    filename: "Carousel.bundle.js",
    path: path.resolve(__dirname, "src/Testimonials"),
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
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
};
