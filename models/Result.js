const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({

  studentEmail: String,
  testId: String,
  score: Number,
  totalQuestions: Number,
  date: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model("Result", resultSchema);