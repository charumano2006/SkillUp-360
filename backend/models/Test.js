const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    title: { type: String, required: true },
    category: { type: String, enum: ['Quant', 'Verbal', 'Logical'], required: true },
    duration: { type: Number, required: true },

    questions: [
        {
            questionText: { type: String, required: true },
            options: [{ type: String, required: true }],
            correctAnswer: { type: String, required: true }
        }
    ]

}, { timestamps: true });

module.exports = mongoose.model('Test', testSchema);