(function () {
  "use strict";

  var controllerMethods = {};


  controllerMethods.hookTesting = function (req, res) {
    var msgVars = {endpoint: req.originalUrl};

    if (!req.body) {
      console.log("No body found");
    } else {
      console.log("Body here", req.body);
      res.json({"Data": req.body})
    }
  }

  module.exports = controllerMethods;
})();
