const express = require('express');
const router = express.Router();
const { 
    createTest, 
    getAllTests, 
    getTestById, 
    submitTest, 
    getAllResults 
} = require('../controllers/testController');

// --- ADMIN OPERATIONS ---

// 1. Create a New Test (Questions add panna)
router.post('/create', createTest);

// 2. View All Student Results (Admin dashboard-la marks paarkka)
router.get('/results/all', getAllResults);


// --- STUDENT OPERATIONS ---

// 3. Get All Available Tests (Student dashboard-la list kaatta)
router.get('/all', getAllTests);

// 4. Get Questions for a Specific Test (Test-ah start panna)
router.get('/:id', getTestById);

// 5. Submit Test & Calculate Score (Test-ah mudikka)
router.post('/submit', submitTest);

module.exports = router;