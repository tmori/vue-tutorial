module.exports = {
    devServer: {
      port: 8001,
      proxy: {
        "^/api/": {
          target: "http://127.0.0.1:4010"
        }
      }
    }
  };