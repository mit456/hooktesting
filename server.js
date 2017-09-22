var express = require("express"),
  app = express(),
  bodyParser = require("body-parser");

// load bodyParser for parsing request data
app.use(bodyParser.urlencoded({extended: true, limit: "200mb"}));
app.use(bodyParser.json({limit: "200mb"}));


require("./routes")(app);
app.set("port", "3011");
app.running = app.listen(app.get("port"));

console.log("Server started running at: ", app.get("port"))

module.exports = app;
