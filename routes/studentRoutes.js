const express = require("express");
const router = express.Router();

const Student = require("../models/Student");

// Get all students
router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.json({ message: "Error fetching students" });
  }
});

module.exports = router;