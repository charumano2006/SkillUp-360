const Test = require("../models/Test");
const TestResult = require("../models/TestResult");

// ✅ GET TESTS
exports.getAllTests = async (req, res) => {
  try {
    const tests = await Test.find();
    res.json(tests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ SUBMIT TEST + SAVE RESULT
exports.submitTest = async (req, res) => {
  try {
    const { answers, questions } = req.body;

    let score = 0;

    questions.forEach((q, i) => {
      if (answers[i] === q.correctAnswer) {
        score++;
      }
    });

    const total = questions.length;
    const percentage = Math.round((score / total) * 100);

    // ✅ SAVE TO DB
    const result = await TestResult.create({
      score,
      total,
      percentage
    });

    res.json({
      msg: "Result saved ✅",
      score,
      total,
      percentage,
      result
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ GET ALL RESULTS (for View Report)
exports.getAllResults = async (req, res) => {
  try {
    const results = await TestResult.find().sort({ submittedAt: -1 });
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};