const express = require("express");
const data = require("../data/flashcardData.json").data;
const cards = data.cards;

const router = express.Router();

router.get("/", (req, res) => {
  const questionId = Math.floor(Math.random() * cards.length);
  res.redirect(`/cards/${questionId}?side=question`);
});

router.get("/:id", (req, res) => {
  const { side } = req.query;
  const { id } = req.params;
  if (!side) {
    res.redirect(`/cards/${id}?side=question`);
  }

  const name = req.cookies.username;
  const text = cards[id][side];
  const { hint } = cards[id];
  const reverseSide = side === "question" ? "answer" : "question";
  const templateData = {
    text,
    id,
    name,
    sideToShow: reverseSide,
    sideToShowDisplay: reverseSide
  };
  if (side === "question") {
    templateData.hint = hint;
  }
  res.render("card", templateData);
});

module.exports = router;
