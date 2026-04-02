const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({

  testId: String,
  question: String,

  optionA: String,
  optionB: String,
  optionC: String,
  optionD: String,

  correctAnswer: String

});

module.exports = mongoose.model("Question", questionSchema);