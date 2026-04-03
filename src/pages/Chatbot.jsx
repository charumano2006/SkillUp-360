import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Chatbot.css";

const Chatbot = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I'm your SkillUp360 AI. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false); // New state to show loading
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg = { role: "user", content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      // Connect to your friend's backend
      const response = await fetch("https://luci-fermentative-viably.ngrok-free.dev/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // This header is required for ngrok to bypass the warning page
          "ngrok-skip-browser-warning": "true" 
        },
        body: JSON.stringify({ message: input }) // Check with your friend if they expect 'message' or 'prompt'
      });

      const data = await response.json();

      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: data.response || "I received your message, but the response format was unexpected." 
      }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: "System Error: Unable to connect to backend server. Please check the ngrok tunnel." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="full-page-chat">
      <nav className="chat-nav">
        <div className="nav-left">
          <span className="ai-logo">SkillUp360_AI</span>
        </div>
        <div className="nav-right">
          <button className="nav-btn" onClick={() => navigate("/")}>Home</button>
          <button className="nav-btn primary" onClick={() => navigate("/student-dashboard")}>Dashboard</button>
        </div>
      </nav>

      <div className="chat-feed">
        {messages.map((msg, i) => (
          <div key={i} className={`chat-row ${msg.role}`}>
            <div className="bubble">
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="chat-row assistant">
            <div className="bubble">AI is thinking...</div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="input-panel">
        <div className="input-box">
          <input 
            type="text" 
            placeholder={isLoading ? "Analyzing..." : "Ask a question..."}
            value={input}
            disabled={isLoading}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button onClick={handleSend} className="send-icon" disabled={isLoading}>
            {isLoading ? "..." : "↑"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;