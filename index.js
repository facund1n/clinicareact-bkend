require("./src/config/mongo");
const app = require("./src/config/express");
const config = require("./src/config/config.js");

app.listen(config.server.port, function () {
  console.log(`Puerto : ${config.server.port}`);
});

module.exports = app;
