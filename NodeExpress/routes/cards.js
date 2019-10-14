const express = require("express");
const data = require("../data/flashcardData.json").data;
const cards = data.cards;

const router = express.Router();

router.get("/", (req, res) => {
  const questionId = Math.floor(Math.random() * 5);
  res.redirect(`/cards/${questionId}?side=question`);
});

router.get("/:id", (req, res) => {
  const { side } = req.query;
  const { id } = req.params;
  const text = cards[id][side];
  const { hint } = cards[id];
  const reverseSide = side === "question" ? "answer" : "question";
  const templateData = {
    text,
    id,
    sideToShow: reverseSide,
    sideToShowDisplay: reverseSide
  };
  if (side === "question") {
    templateData.hint = hint;
  }
  res.render("card", templateData);
});

module.exports = router;
