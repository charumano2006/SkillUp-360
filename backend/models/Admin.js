const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    department: { type: String, required: true },
    password: { type: String, required: true },
    securityQuestion: { type: String },
    securityAnswer: { type: String },
    role: { type: String, default: 'admin' }, // Role default-ah admin-ah irukkum
    adminId: { type: String, unique: true }   // Inga thaan comma missing-ah irundhuchu, fix panniyachu
}, { timestamps: true });

module.exports = mongoose.model('Admin', adminSchema);