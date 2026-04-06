import React, { useState, useEffect, useCallback } from "react";
import "./TestPage.css";
import { useNavigate } from "react-router-dom";

const TestPage = () => {
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(50 * 60);
  const [isFinished, setIsFinished] = useState(false);

  // ✅ FETCH QUESTIONS FROM BACKEND
  useEffect(() => {
    const loadTest = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/test/all");
        const data = await res.json();

        if (data.length > 0) {
          setQuestions(data[0].questions);
        }
      } catch (err) {
        console.log("Backend error:", err);
      }
    };

    loadTest();
  }, []);

  // ⏱ TIMER
  useEffect(() => {
    if (timeLeft <= 0) {
      handleFinish();
      return;
    }
    const timer = setInterval(() => setTimeLeft((p) => p - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleOptionSelect = (qIdx, optIdx) => {
    if (isFinished) return;
    setSelectedAnswers({ ...selectedAnswers, [qIdx]: optIdx });
  };

  // ✅ SUBMIT TEST
  const handleFinish = useCallback(async () => {
    setIsFinished(true);

    try {
      const answers = questions.map((q, i) => {
        return q.options[selectedAnswers[i]];
      });

      await fetch("http://localhost:5000/api/test/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          answers,
          questions
        })
      });

    } catch (err) {
      console.log("Submit error:", err);
    }
  }, [questions, selectedAnswers]);

  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec < 10 ? "0" : ""}${sec}`;
  };

  // 🔴 LOADING
  if (questions.length === 0) {
    return <h2 style={{ color: "white", textAlign: "center" }}>Loading Test...</h2>;
  }

  // ✅ RESULT SCREEN
  if (isFinished) {
    return (
      <div className="test-finish-overlay">
        <div className="finish-card">
          <h2>Test Submitted ✅</h2>
          <button onClick={() => navigate("/student-dashboard")}>
            Go Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="test-wrapper">

      {/* NAV */}
      <div className="test-nav">
        ⏱ {formatTime(timeLeft)}
      </div>

      <div className="test-container">

        {/* SIDEBAR */}
        <div className="test-sidebar">
          {questions.map((_, i) => (
            <div
              key={i}
              className={`test-q-box ${currentIdx === i ? "active" : ""} ${selectedAnswers[i] !== undefined ? "answered" : ""}`}
              onClick={() => setCurrentIdx(i)}
            >
              {i + 1}
            </div>
          ))}
        </div>

        {/* MAIN */}
        <div className="test-main">

          <div className="glass-workspace">
            <p className="test-q-text">
              {questions[currentIdx]?.questionText}
            </p>

            {/* ✅ OLD CARD DESIGN RESTORED */}
            <div className="test-options-grid">
              {questions[currentIdx]?.options.map((opt, i) => (
                <button
                  key={i}
                  className={`test-option-card ${
                    selectedAnswers[currentIdx] === i ? "selected" : ""
                  }`}
                  onClick={() => handleOptionSelect(currentIdx, i)}
                >
                  <span className="option-label">
                    {String.fromCharCode(65 + i)}
                  </span>
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* FOOTER */}
          <div className="test-footer">
            <button
              onClick={() => setCurrentIdx(Math.max(0, currentIdx - 1))}
              disabled={currentIdx === 0}
            >
              PREVIOUS
            </button>

            {currentIdx === questions.length - 1 ? (
              <button onClick={handleFinish}>
                SUBMIT
              </button>
            ) : (
              <button onClick={() => setCurrentIdx(currentIdx + 1)}>
                NEXT
              </button>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

export default TestPage;