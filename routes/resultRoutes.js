const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
    testId: { type: mongoose.Schema.Types.ObjectId, ref: 'Test', required: true },
    score: { type: Number, required: true },
    totalQuestions: { type: Number, required: true },
    status: { type: String, default: 'Completed' }
}, { timestamps: true });

module.exports = mongoose.model('Result', resultSchema);