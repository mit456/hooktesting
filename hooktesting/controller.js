(function () {
  "use strict";

  var controllerMethods = {};


  controllerMethods.hookTesting = function (req, res) {
    var msgVars = {endpoint: req.originalUrl};

    if (!req.body) {
      console.log("No body found");
    } else {
      // Accepting body here
      console.log("Body here", req.body);
      // Process status and retrieve data
      // via GET APIs.
      // Send ACK
      res.json({"Data": req.body})
    }
  }

  module.exports = controllerMethods;
})();
