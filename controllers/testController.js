const Test = require('../models/Test');
const Result = require('../models/Result');

// 1. Admin: Create a New Test
exports.createTest = async (req, res) => {
    try {
        const { title, category, duration, questions } = req.body;
        const newTest = new Test({ title, category, duration, questions });
        await newTest.save();
        res.status(201).json({ success: true, message: "Test created successfully!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// 2. Student: Get All Available Tests
exports.getAllTests = async (req, res) => {
    try {
        // Questions-ah anuppama title and duration mattum anuppuvom
        const tests = await Test.find({}, "title category duration createdAt");
        res.status(200).json({ success: true, tests });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// 3. Student: Get Questions for a Specific Test
exports.getTestById = async (req, res) => {
    try {
        const test = await Test.findById(req.params.id);
        if (!test) return res.status(404).json({ message: "Test not found" });
        res.status(200).json({ success: true, test });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// 4. Student: Submit Test & Calculate Score
exports.submitTest = async (req, res) => {
    try {
        const { studentId, testId, answers } = req.body; 
        // answers array: [{ qId: "...", selectedOption: "..." }]

        const test = await Test.findById(testId);
        if (!test) return res.status(404).json({ message: "Test not found" });

        let score = 0;
        // Logic to check answers
        test.questions.forEach((q) => {
            const studentAns = answers.find(a => a.qId === q._id.toString());
            if (studentAns && studentAns.selectedOption === q.correctAnswer) {
                score++;
            }
        });

        const newResult = new Result({
            studentId,
            testId,
            score,
            totalQuestions: test.questions.length
        });

        await newResult.save();
        res.status(200).json({ 
            success: true, 
            message: "Test submitted successfully!",
            score, 
            total: test.questions.length 
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// 5. Admin: View All Student Results
exports.getAllResults = async (req, res) => {
    try {
        // Populate use panni student name and test title-ah fetch panrom
        const results = await Result.find()
            .populate('studentId', 'firstName lastName email')
            .populate('testId', 'title');
        res.status(200).json({ success: true, results });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};