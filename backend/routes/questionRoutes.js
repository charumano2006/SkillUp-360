const express = require("express");
const router = express.Router();

const Question = require("../models/Question");

// Add Question
router.post("/add", async (req, res) => {
  try {
    const question = new Question(req.body);
    await question.save();
    res.json({ message: "Question added successfully" });
  } catch (error) {
    res.json({ message: "Error adding question" });
  }
});

// Get Questions
router.get("/", async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    res.json({ message: "Error fetching questions" });
  }
});

module.exports = router;