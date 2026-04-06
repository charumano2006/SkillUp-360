const { GoogleGenerativeAI } = require("@google/generative-ai");

exports.askChatbot = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.json({ response: "Please enter a message" });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    // ✅ Correct model (as your friend said)
    const model = genAI.getGenerativeModel({
      model: "gemini-3-flash-preview"
    });

    // ✅ Correct way to send message
    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: message }]
        }
      ]
    });

    const reply = result.response.text();

    res.json({ response: reply });

  } catch (err) {
    console.error("GEMINI ERROR:", err);

    res.json({
      response: "❌ Error: " + err.message
    });
  }
};