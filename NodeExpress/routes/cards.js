const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("card", {
    prompt: "Who is burried",
    hint: "A hint"
  });
});

module.export = router;