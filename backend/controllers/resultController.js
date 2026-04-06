const Result = require('../models/Result');
const Student = require('../models/Student');

exports.getAdminReport = async (req, res) => {
    try {
        const { testId } = req.params;

        // 1. Get all students
        const allStudents = await Student.find({}, 'firstName lastName email');

        // 2. Get students who attended this test
        const submissions = await Result.find({ testId }).populate('studentId');

        const attendedIds = submissions.map(s => s.studentId._id.toString());

        // 3. Compare and create final list
        const report = allStudents.map(student => {
            const submission = submissions.find(s => s.studentId._id.toString() === student._id.toString());
            return {
                name: `${student.firstName} ${student.lastName}`,
                email: student.email,
                status: attendedIds.includes(student._id.toString()) ? "Attended" : "Not Attended",
                score: submission ? submission.score : 0,
                categoryScores: submission ? submission.categoryScores : null
            };
        });

        res.status(200).json(report);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};