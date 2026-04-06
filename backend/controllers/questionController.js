const Question = require("../models/Question");

exports.addQuestion = async (req, res) => {

  const { question, options, answer } = req.body;

  const newQuestion = new Question({
    question,
    options,
    answer
  });

  await newQuestion.save();

  res.send("Question Added");
};

exports.getQuestions = async (req, res) => {

  const questions = await Question.find();

  res.json(questions);
};