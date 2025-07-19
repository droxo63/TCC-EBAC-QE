module.exports = {
  reporters: [
    "default",
    ["jest-html-reporters", {
      publicPath: "./reports/api",
      filename: "report.html",
      expand: true
    }]
  ]
};
