require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const chatbotRoutes = require("./routes/chatbotRoutes");
const authRoutes = require("./routes/authRoutes");
const testRoutes = require("./routes/testRoutes"); // ✅ ADD HERE

const app = express();

app.use(cors());
app.use(express.json());

// ✅ MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ MongoDB Error:", err));

// ✅ ROUTES
app.use("/api/chatbot", chatbotRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes); // ✅ THIS FIXES EVERYTHING

// TEST
app.get("/", (req, res) => {
  res.send("Backend running ✅");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});