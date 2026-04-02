const express = require('express');
const router = express.Router();
const { askChatbot } = require('../controllers/chatbotController');

// POST request handle panra path correct-ah irukanum
router.post('/ask', askChatbot);

module.exports = router;