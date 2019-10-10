const express = require("express");

const app = express();

const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/cards", (req, res) => {
  res.render("card", {
    prompt: "Who is burried",
    hint: "A hint"
  });
});

app.get("/hello", (req, res) => {
  res.render("hello");
});

app.post("/hello", (req, res) => {
  // not yet
});

app.listen(3000, () => {
  console.log("The application is working on port 3000");
});
