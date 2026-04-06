const express = require("express");
const router = express.Router();

const {
  getAllTests,
  submitTest,
  getAllResults
} = require("../controllers/testController");

router.get("/all", getAllTests);
router.post("/submit", submitTest);

// 🔥 NEW
router.get("/results", getAllResults);

module.exports = router;