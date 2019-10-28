"use strict";

var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.json({ response: "You sent me a GET request" });
});

router.post("/", (req, res) => {
  res.json({
    response: "You sent me a POST request",
    body: req.body
  });
});

router.get("/:qID", function(req, res) {
  res.json({ response: "You sent me a GET request for ID " + req.params.id });
});

router.post("/:qID/answers", (req, res) => {
  res.json({
    response: "You sent me a POST reques to /answes",
    questionId: req.params.qID,
    body: req.body
  });
});

router.post("/:qID/answers/:aID", (req, res) => {
  res.json({
    response: "You sent me a POST reques to /answes",
    questionId: req.params.qID,
    answerId: req.params.aID,
    body: req.body
  });
});

router.delete("/:qID/answers/:aID", (req, res) => {
  res.json({
    response: "You sent me a DELETE reques to /answes",
    questionId: req.params.qID,
    answerId: req.params.aID
  });
});

// vote up or down
router.post("/:qID/answers/:aID/vote-:dir", (req, res) => {
  res.json({
    response: "You sent me a DELETE reques to /vote-" + req.params.dir,
    questionId: req.params.qID,
    answerId: req.params.aID,
    vote: req.params.dir
  });
});

module.exports = router;
