/*
 * Notifcation hook testing route
 */


(function () {
  "use strict";

  var express = require("express"),
    controller = require("./controller"),
    router = express.Router();

  router.post("/", controller.hookTesting);

  module.exports = router;
})();
