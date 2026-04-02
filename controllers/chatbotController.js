const { GoogleGenerativeAI } = require("@google/generative-ai");

exports.askChatbot = async (req, res) => {
    try {
        const { prompt } = req.body;
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            return res.status(500).json({ 
                success: false, 
                error: "API Key missing in server configuration!" 
            });
        }

        // 1. Initialize SDK
        const genAI = new GoogleGenerativeAI(apiKey);

        // 2. Model Selection (Unga AI Studio-la work aana adhae model name)
        const model = genAI.getGenerativeModel({ 
            model: "gemini-3-flash-preview" 
        });

        if (!prompt) {
            return res.status(400).json({ 
                success: false, 
                error: "Please provide a question or prompt!" 
            });
        }

        // 3. Generate Response
        // Inga optional-ah neenga 'System Instructions' kooda sethukkalaam
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // 4. Success Response
        res.status(200).json({ 
            success: true, 
            answer: text 
        });

    } catch (err) {
        console.error("--- GEMINI ERROR LOG ---");
        console.error(err.message);

        res.status(500).json({ 
            success: false,
            error: "Gemini connection failed!",
            details: err.message 
        });
    }
};