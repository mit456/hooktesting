module.exports = function (app) {
  "use strict";

  // Sample endpoint name hooktesting
  // API url - localhost:3011/hooktesting POST
  app.use("/hooktesting", require("./hooktesting/routes"));
};
