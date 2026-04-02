const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    securityQuestion: { type: String },
    answer: { type: String },
    gender: { type: String },
    role: { type: String, default: 'student' }
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);