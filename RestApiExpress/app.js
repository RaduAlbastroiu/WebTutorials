"use strict";

var express = require("express");
var app = express();
var routes = require("./routes");

var jsonParser = require("body-parser").json;
var logger = require("morgan");

app.use(logger("dev"));
app.use(jsonParser());

app.use("/questions", routes);

app.use((req, res, next) => {
  next();
});

var port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("succesfully setup");
});
