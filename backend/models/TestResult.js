const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  score: Number,
  total: Number,
  percentage: Number,
  submittedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("TestResult", resultSchema);