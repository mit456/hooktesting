module.exports = function (app) {
  "use strict";

  app.use("/hooktesting", require("./hooktesting/routes"));
};
