import React, { useState, useEffect, useCallback } from "react";
import "./TestPage.css";
import { useNavigate } from "react-router-dom";

const TestPage = () => {
  const navigate = useNavigate();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(50 * 60); // 50 minutes
  const [isFinished, setIsFinished] = useState(false);

  // --- FULL 70 QUESTIONS DATA ---
  const [questions] = useState([
    // VERBAL
    { q: "Choose the correct synonym of Happy.", options: ["Sad", "Joyful", "Angry", "Tired"], correct: 1, topic: "Verbal" },
    { q: "Choose the correct antonym of Strong.", options: ["Weak", "Powerful", "Brave", "Bold"], correct: 0, topic: "Verbal" },
    { q: "Fill in the blank. She _____ to school every day.", options: ["go", "goes", "going", "gone"], correct: 1, topic: "Verbal" },
    { q: "Find the error. He do not like coffee.", options: ["He", "do", "not", "coffee"], correct: 1, topic: "Verbal" },
    { q: "Choose the correct word. I have two _____.", options: ["book", "books", "booking", "booked"], correct: 1, topic: "Verbal" },
    { q: "Rearrange the sentence: playing(1) children(2) are(3) the(4)", options: ["4-2-3-1", "2-4-1-3", "3-4-2-1", "4-3-2-1"], correct: 0, topic: "Verbal" },
    { q: "Choose the correct synonym of Fast.", options: ["Slow", "Quick", "Weak", "Late"], correct: 1, topic: "Verbal" },
    { q: "Choose the correct antonym of Hot.", options: ["Warm", "Cold", "Cool", "Heat"], correct: 1, topic: "Verbal" },
    { q: "Fill in the blank. They _____ watching TV.", options: ["is", "are", "am", "be"], correct: 1, topic: "Verbal" },
    { q: "Choose the correct word. The sun _____ in the east.", options: ["rise", "rises", "rising", "rose"], correct: 1, topic: "Verbal" },
    // LOGICAL
    { q: "Find the next number. 2, 4, 6, 8, ?", options: ["9", "10", "11", "12"], correct: 1, topic: "Logical" },
    { q: "Find the next number. 3, 9, 27, ?", options: ["54", "72", "81", "90"], correct: 2, topic: "Logical" },
    { q: "Find the next letter. A, C, E, G, ?", options: ["H", "I", "J", "K"], correct: 1, topic: "Logical" },
    { q: "If CAT is coded as DBU, how is DOG coded?", options: ["EPH", "FQI", "EPI", "DPH"], correct: 0, topic: "Logical" },
    { q: "A is the brother of B. B is the sister of C. How is A related to C?", options: ["Brother", "Sister", "Uncle", "Cousin"], correct: 0, topic: "Logical" },
    { q: "Ravi walks north and then turns right. Which direction is he facing?", options: ["East", "West", "North", "South"], correct: 0, topic: "Logical" },
    { q: "Find the odd one out.", options: ["Dog", "Cat", "Tiger", "Car"], correct: 3, topic: "Logical" },
    { q: "Book : Read :: Food : ?", options: ["Eat", "Cook", "Buy", "Sell"], correct: 0, topic: "Logical" },
    { q: "A is taller than B but shorter than C. Who is tallest?", options: ["A", "B", "C", "Cannot say"], correct: 2, topic: "Logical" },
    { q: "Find the missing number. 4, 9, 16, 25, ?", options: ["30", "32", "36", "40"], correct: 2, topic: "Logical" },
    // QUANTS
    { q: "What is 25% of 200?", options: ["25", "40", "50", "75"], correct: 2, topic: "Quants" },
    { q: "Find the average of 10, 20, 30.", options: ["15", "20", "25", "30"], correct: 1, topic: "Quants" },
    { q: "Find the HCF of 12 and 18.", options: ["3", "4", "6", "9"], correct: 2, topic: "Quants" },
    { q: "Find the LCM of 4 and 6.", options: ["8", "10", "12", "24"], correct: 2, topic: "Quants" },
    { q: "If CP = 100 and SP = 120, profit = ?", options: ["10", "20", "30", "40"], correct: 1, topic: "Quants" },
    { q: "Choose the correct antonym of Rich.", options: ["Poor", "Wealthy", "Richer", "Richest"], correct: 0, topic: "Verbal" },
    { q: "Fill in the blank. He _____ a book.", options: ["read", "reads", "reading", "reader"], correct: 1, topic: "Verbal" },
    { q: "Find the next number. 5, 10, 20, 40, ?", options: ["60", "70", "80", "90"], correct: 2, topic: "Logical" },
    { q: "If PEN is coded as QFO, how is MAP coded?", options: ["NBQ", "NBP", "NCP", "NBO"], correct: 0, topic: "Logical" },
    { q: "Find the odd one out.", options: ["Apple", "Mango", "Car", "Orange"], correct: 2, topic: "Logical" },
    { q: "What is 10% of 500?", options: ["40", "50", "60", "70"], correct: 1, topic: "Quants" },
    { q: "Find the square of 12.", options: ["124", "144", "154", "164"], correct: 1, topic: "Quants" },
    { q: "Find the cube of 3.", options: ["9", "18", "27", "36"], correct: 2, topic: "Quants" },
    { q: "Speed = 60 km/hr, Time = 2 hr. Distance = ?", options: ["100", "110", "120", "130"], correct: 2, topic: "Quants" },
    { q: "Average of 20 and 30 = ?", options: ["20", "25", "30", "35"], correct: 1, topic: "Quants" },
    { q: "Choose the correct synonym of Begin.", options: ["End", "Start", "Stop", "Finish"], correct: 1, topic: "Verbal" },
    { q: "Fill in the blank. She _____ singing.", options: ["is", "are", "am", "be"], correct: 0, topic: "Verbal" },
    { q: "Find the next number. 7, 14, 21, 28, ?", options: ["30", "35", "36", "40"], correct: 1, topic: "Logical" },
    { q: "Find the odd number.", options: ["2", "4", "6", "9"], correct: 3, topic: "Logical" },
    { q: "Doctor : Hospital :: Teacher : ?", options: ["Book", "School", "Pen", "Table"], correct: 1, topic: "Logical" },
    { q: "What is 30% of 500?", options: ["120", "140", "150", "180"], correct: 2, topic: "Quants" },
    { q: "Find the perimeter of a square (side = 5).", options: ["10", "15", "20", "25"], correct: 2, topic: "Quants" },
    { q: "Area of rectangle (10 × 5) = ?", options: ["40", "45", "50", "55"], correct: 2, topic: "Quants" },
    { q: "Find the square root of 81.", options: ["7", "8", "9", "10"], correct: 2, topic: "Quants" },
    { q: "If distance = 120 km and speed = 60 km/hr, time = ?", options: ["1", "2", "3", "4"], correct: 1, topic: "Quants" },
    { q: "Choose the correct antonym of Early.", options: ["Late", "Soon", "Fast", "Quick"], correct: 0, topic: "Verbal" },
    { q: "Fill in the blank. They _____ football.", options: ["play", "plays", "playing", "played"], correct: 0, topic: "Verbal" },
    { q: "Find the next letter. B, D, F, H, ?", options: ["I", "J", "K", "L"], correct: 1, topic: "Logical" },
    { q: "Find the odd one out.", options: ["Square", "Rectangle", "Triangle", "Banana"], correct: 3, topic: "Logical" },
    { q: "Bird : Fly :: Fish : ?", options: ["Swim", "Run", "Jump", "Walk"], correct: 0, topic: "Logical" },
    { q: "What is 40% of 250?", options: ["80", "90", "100", "110"], correct: 2, topic: "Quants" },
    { q: "Find the average of 5, 10, 15, 20.", options: ["10", "12.5", "15", "17.5"], correct: 1, topic: "Quants" },
    { q: "Find the HCF of 9 and 12.", options: ["2", "3", "4", "6"], correct: 1, topic: "Quants" },
    { q: "Find the LCM of 3 and 5.", options: ["8", "10", "12", "15"], correct: 3, topic: "Quants" },
    { q: "Find 50% of 300.", options: ["100", "120", "150", "200"], correct: 2, topic: "Quants" },
    { q: "Choose the synonym of Big.", options: ["Large", "Small", "Tiny", "Short"], correct: 0, topic: "Verbal" },
    { q: "Fill in the blank. We _____ happy.", options: ["is", "are", "am", "be"], correct: 1, topic: "Verbal" },
    { q: "Find the next number. 1, 3, 5, 7, ?", options: ["8", "9", "10", "11"], correct: 1, topic: "Logical" },
    { q: "Find the odd number.", options: ["10", "20", "30", "25"], correct: 3, topic: "Logical" },
    { q: "Pen : Write :: Knife : ?", options: ["Cut", "Hold", "Throw", "Drop"], correct: 0, topic: "Logical" },
    { q: "What is 15% of 200?", options: ["20", "25", "30", "35"], correct: 2, topic: "Quants" },
    { q: "Find the cube of 4.", options: ["32", "48", "64", "72"], correct: 2, topic: "Quants" },
    { q: "Average of first five natural numbers = ?", options: ["2", "3", "4", "5"], correct: 1, topic: "Quants" },
    { q: "If CP = 120 and SP = 150, profit = ?", options: ["20", "25", "30", "35"], correct: 2, topic: "Quants" },
    { q: "Find the square root of 64.", options: ["6", "7", "8", "9"], correct: 2, topic: "Quants" },
    { q: "Choose the antonym of Clean.", options: ["Dirty", "Clear", "Fresh", "Pure"], correct: 0, topic: "Verbal" },
    { q: "Fill in the blank. He _____ cricket yesterday.", options: ["play", "played", "playing", "plays"], correct: 1, topic: "Verbal" },
    { q: "Find the next letter. C, F, I, L, ?", options: ["M", "N", "O", "P"], correct: 2, topic: "Logical" },
    { q: "Find the odd one out.", options: ["Rose", "Lotus", "Lily", "Chair"], correct: 3, topic: "Logical" },
    { q: "Sun : Day :: Moon : ?", options: ["Sky", "Night", "Light", "Star"], correct: 1, topic: "Logical" }
  ]);

  const handleFinish = useCallback(() => setIsFinished(true), []);

  useEffect(() => {
    if (timeLeft <= 0) { handleFinish(); return; }
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, handleFinish]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleOptionSelect = (qIdx, optIdx) => {
    if (isFinished) return;
    setSelectedAnswers({ ...selectedAnswers, [qIdx]: optIdx });
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, i) => { if (selectedAnswers[i] === q.correct) score++; });
    return score;
  };

  if (isFinished) {
    const score = calculateScore();
    return (
      <div className="test-finish-overlay">
        <div className="finish-card glass-card">
          <h2>TEST_TERMINATED</h2>
          <div className="score-circle">
            <span className="final-score">{Math.round((score / 70) * 100)}%</span>
            <p>Placement Readiness</p>
          </div>
          <button className="ctrl-btn primary" onClick={() => navigate("/student-dashboard")}>RETURN_TO_DASHBOARD</button>
        </div>
      </div>
    );
  }

  return (
    <div className="test-wrapper">
      <nav className="test-nav">
        <div className="nav-left">
          <span className="nav-logo">SKILLUP_360</span>
          <span className="live-tag">LIVE_EXAM_MODE</span>
        </div>
        <div className="nav-center">
          <div className={`timer-display ${timeLeft < 300 ? "warning" : ""}`}>⏱ {formatTime(timeLeft)}</div>
        </div>
        <button className="terminate-btn" onClick={() => window.confirm("Terminate Exam?") && handleFinish()}>TERMINATE</button>
      </nav>

      <div className="test-container">
        <aside className="test-sidebar">
          <h4 className="side-label">QUESTION_MAP</h4>
          <div className="test-grid">
            {questions.map((_, i) => (
              <div key={i} className={`test-q-box ${currentIdx === i ? 'active' : ''} ${selectedAnswers[i] !== undefined ? 'answered' : ''}`} onClick={() => setCurrentIdx(i)}>
                {i + 1}
              </div>
            ))}
          </div>
        </aside>

        <main className="test-main">
          <div className="question-header">
            <span className="topic-tag">{questions[currentIdx].topic}</span>
            <span className="q-count">Question {currentIdx + 1} of 70</span>
          </div>

          <div className="glass-workspace">
            <p className="test-q-text">{questions[currentIdx].q}</p>
            <div className="test-options">
              {questions[currentIdx].options.map((opt, i) => (
                <button key={i} className={`test-opt-btn ${selectedAnswers[currentIdx] === i ? 'selected' : ''}`} onClick={() => handleOptionSelect(currentIdx, i)}>
                  <span className="opt-prefix">{String.fromCharCode(65 + i)}</span> {opt}
                </button>
              ))}
            </div>
          </div>

          <div className="test-footer">
            <button className="ctrl-btn" onClick={() => setCurrentIdx(Math.max(0, currentIdx - 1))} disabled={currentIdx === 0}>PREVIOUS</button>
            {currentIdx === 69 ? (
              <button className="ctrl-btn primary pulse" onClick={handleFinish}>SUBMIT_TEST</button>
            ) : (
              <button className="ctrl-btn primary" onClick={() => setCurrentIdx(currentIdx + 1)}>SAVE & NEXT</button>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default TestPage;