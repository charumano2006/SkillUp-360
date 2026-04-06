const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// 🛑 Inga 'admin-register' nu irukurdha check pannunga
router.post('/student-register', authController.studentRegister);
router.post('/admin-register', authController.adminRegister); 
router.post('/login', authController.login);

module.exports = router;