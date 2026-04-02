const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Route file-ah import pannunga
const chatbotRoutes = require('./routes/chatbotRoutes');
const authRoutes = require('./routes/authRoutes'); // 👈 Pudhusa add panniyachu

// .env configuration
dotenv.config();

const app = express();

// 1. Middleware
app.use(cors()); // Frontend (React) backend-kooda pesuradhukku
app.use(express.json()); // JSON data-ah body-la handle panna

// 2. Database Connection
const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/skillup360';
mongoose.connect(mongoURI)
    .then(() => console.log("✅ MongoDB Connected Successfully"))
    .catch((err) => console.log("❌ MongoDB Connection Error:", err));

// 3. API Routes
// Chatbot routes
app.use('/api/chatbot', chatbotRoutes);

// Authentication Routes (Student & Admin Registration/Login)
// 🛑 Ippo Postman-la '/api/auth/admin-register' nu kudutha idhu work aagum
app.use('/api/auth', authRoutes); 

// 4. Basic Health Check Route
app.get('/', (req, res) => {
    res.send('SkillUp360 Backend is Running Perfectly!');
});

// 5. Port Configuration
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server flying on http://localhost:${PORT}`);
});