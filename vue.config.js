const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
module.exports = {
  publicPath: "./",
  configureWebpack: {
    plugins: [
      new MonacoWebpackPlugin({
        // available options are documented at https://github.com/Microsoft/monaco-editor-webpack-plugin#options
        languages: [
          "javascript",
          "typescript",
          "css",
          "html",
          "json",
          "markdown"
        ]
      })
    ]
  }
};
