const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  devServer: {
    contentBase: path.join(__dirname, './src')
  },
  entry: path.resolve(__dirname, "./src/index.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    path: path.join(__dirname,'public'),
    filename: 'main.bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx','.css'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    alias: {
      Components: path.resolve(__dirname, './src/components/'),
      Hooks: path.resolve(__dirname, './src/hooks/'),
      Api: path.resolve(__dirname, './src/api/'),
      Pages: path.resolve(__dirname, './src/pages/'),
      Root: path.resolve(__dirname, './src')
    },
  },
};