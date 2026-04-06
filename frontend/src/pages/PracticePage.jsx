import React, { useState } from "react";
import "./PracticePage.css";
import { useNavigate } from "react-router-dom";

const PracticePage = () => {
  const navigate = useNavigate();
  const [showTest, setShowTest] = useState(false);
  const [selectedModule, setSelectedModule] = useState("");
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answeredStatus, setAnsweredStatus] = useState({});
  const [streak, setStreak] = useState(0);

  // --- DATA BANKS ---
  const verbalQuestions = [
    { q: "Choose the synonym of Rapid.", options: ["Slow", "Fast", "Weak", "Small"], correct: 1, hint: "Think of high speed." },
    { q: "Choose the antonym of Generous.", options: ["Kind", "Selfish", "Helpful", "Honest"], correct: 1, hint: "Opposite of giving." },
    { q: "Choose the synonym of Ancient.", options: ["Old", "Modern", "New", "Fresh"], correct: 0, hint: "From a long time ago." },
    { q: "Choose the antonym of Victory.", options: ["Success", "Win", "Defeat", "Achievement"], correct: 2, hint: "The opposite of winning." },
    { q: "Choose the synonym of Happy.", options: ["Sad", "Joyful", "Angry", "Tired"], correct: 1, hint: "Feeling of pleasure." },
    { q: "She ____ to school every day.", options: ["go", "goes", "going", "gone"], correct: 1, hint: "Third-person singular takes 's/es'." },
    { q: "The sun ____ in the east.", options: ["rise", "rises", "rising", "rose"], correct: 1, hint: "Universal truth." },
    { q: "He is good ____ mathematics.", options: ["in", "at", "on", "for"], correct: 1, hint: "Usage for skills." },
    { q: "They ____ playing football yesterday.", options: ["was", "were", "is", "be"], correct: 1, hint: "Past plural subject." },
    { q: "She bought ____ apple.", options: ["a", "an", "the", "no article"], correct: 1, hint: "Vowel sound." },
    { q: "Correct Sentence Selection:", options: ["She goes to college every day", "She going to college every day", "She gone to college every day", "She go college every day"], correct: 0, hint: "Check verb form." },
    { q: "Correct Sentence Selection:", options: ["He doesn’t like coffee", "He not like coffee", "He don’t likes coffee", "He liking coffee"], correct: 0, hint: "Negative auxiliary." },
    { q: "Correct Sentence Selection:", options: ["The boys are playing in the ground", "The boys playing in ground", "The boys plays in ground", "The boys play in ground"], correct: 0, hint: "Plural subject." },
    { q: "Correct Sentence Selection:", options: ["She is the smartest student", "She is smartest student", "She smartest student", "She is more smartest"], correct: 0, hint: "Superlative rules." },
    { q: "Correct Sentence Selection:", options: ["I did not go there", "I not went there", "I did not going there", "I go not there"], correct: 0, hint: "After 'did', use base form." },
    { q: "Error Spotting: She / go / to market / every day", options: ["She", "go", "to market", "every day"], correct: 1, hint: "Check 'She'." },
    { q: "Error Spotting: He / have / two brothers", options: ["He", "have", "two", "brothers"], correct: 1, hint: "He/She/It uses 'has'." },
    { q: "Error Spotting: They / was / playing / cricket", options: ["They", "was", "playing", "cricket"], correct: 1, hint: "'They' is plural." },
    { q: "Error Spotting: I / has / a new laptop", options: ["I", "has", "a", "new laptop"], correct: 1, hint: "'I' takes 'have'." },
    { q: "Error Spotting: She / do / her work / properly", options: ["She", "do", "her work", "properly"], correct: 1, hint: "She 'does'." },
    { q: "Order: A. Oxygen. B. Trees. C. Protect. D. Fruits.", options: ["B A D C", "A B D C", "B D A C", "B C A D"], correct: 0, hint: "Start with Trees." },
    { q: "Order: A. Studied. B. Passed. C. Exam. D. Succeeded.", options: ["C A B D", "A C B D", "C B A D", "B C A D"], correct: 0, hint: "Start with Context." },
    { q: "Passage: Exercise keeps body healthy.", options: ["Exercise improves health", "Doctors are strict", "Stress is dangerous", "Exercise is difficult"], correct: 0, hint: "Core message." },
    { q: "Recommended exercise time?", options: ["10 mins", "20 mins", "30 mins", "1 hour"], correct: 2, hint: "Fact from text." },
    { q: "Correct Spelling:", options: ["Enviroment", "Environment", "Enviornment", "Envirment"], correct: 1, hint: "Silent 'n'." },
    { q: "He is ____ honest man.", options: ["a", "an", "the", "no article"], correct: 1, hint: "Vowel sound 'O'." },
    { q: "Antonym of Brave:", options: ["Courageous", "Fearless", "Coward", "Strong"], correct: 2, hint: "Lack of courage." },
    { q: "Synonym of Big:", options: ["Small", "Huge", "Tiny", "Little"], correct: 1, hint: "Large size." },
    { q: "They ____ watching TV now.", options: ["is", "are", "was", "be"], correct: 1, hint: "Present plural." },
    { q: "Correct Sentence Selection:", options: ["She don’t like tea", "She doesn’t like tea", "She not like tea", "She liking tea"], correct: 1, hint: "Negative verb." }
  ];

  const logicalQuestions = [
    { q: "Find the next number: 2, 6, 12, 20, ?", options: ["28", "30", "32", "34"], correct: 1, hint: "Pattern: +4, +6, +8, +10" },
    { q: "Find the missing number: 3, 6, 12, 24, ?", options: ["36", "42", "48", "60"], correct: 2, hint: "Multiplied by 2" },
    { q: "Find the next number: 1, 4, 9, 16, ?", options: ["20", "24", "25", "30"], correct: 2, hint: "Perfect squares (1, 2, 3, 4...)" },
    { q: "Next letter: A, D, G, J, ?", options: ["L", "M", "N", "O"], correct: 1, hint: "Gap of 2 letters" },
    { q: "Next letter: Z, X, V, T, ?", options: ["R", "Q", "P", "S"], correct: 0, hint: "Reverse gap of 1" },
    { q: "CAT -> DBU. How is BAT coded?", options: ["CBV", "DBU", "CBU", "DBT"], correct: 2, hint: "+1 to each letter" },
    { q: "PEN -> QFO. How is MAP coded?", options: ["NBQ", "NBP", "NBQ", "NCP"], correct: 0, hint: "+1 to each letter" },
    { q: "Rahul is Meena's son. Meena is Ramesh's daughter. Ramesh is?", options: ["Father", "Grandfather", "Uncle", "Brother"], correct: 1, hint: "Mother's father" },
    { q: "A man is the brother of my mother. Who is he?", options: ["Uncle", "Father", "Brother", "Cousin"], correct: 0, hint: "Mother's brother" },
    { q: "Walks 5m North, then 5m East. Direction?", options: ["North", "South", "North-East", "South-East"], correct: 2, hint: "Think of the map" },
    { q: "Facing South, Ravi turns right. Direction?", options: ["East", "West", "North", "South"], correct: 1, hint: "Clockwise from South" },
    { q: "A, B, C, D, E in a row. B between A and C. Middle?", options: ["A", "B", "C", "D"], correct: 1, hint: "Position mapping" },
    { q: "A opposite B. C next to B. Who is opposite C?", options: ["A", "B", "D", "Cannot determine"], correct: 3, hint: "Need total number of people" },
    { q: "All dogs are animals. Some animals are pets.", options: ["All pets are dogs", "Some animals are pets", "Some dogs are pets", "No dogs are animals"], correct: 1, hint: "Check the statement" },
    { q: "All pencils are pens. Some pens are books.", options: ["Some pencils are books", "Some pens are books", "All books are pens", "No pencils are books"], correct: 1, hint: "Check validity" },
    { q: "Smoking is harmful. Conclusion?", options: ["Avoid smoking", "False", "Cannot say", "None"], correct: 0, hint: "Logical result" },
    { q: "Heavy rain yesterday. Roads were flooded.", options: ["Cause", "Effect", "Both", "None"], correct: 2, hint: "Relationship" },
    { q: "Odd one out:", options: ["Cow", "Dog", "Tiger", "Car"], correct: 3, hint: "Living vs Non-living" },
    { q: "Odd number:", options: ["5", "10", "15", "18"], correct: 3, hint: "Even vs Odd" },
    { q: "Book : Read :: Food : ?", options: ["Eat", "Cook", "Buy", "Serve"], correct: 0, hint: "What do you do with food?" },
    { q: "Pen : Write :: Knife : ?", options: ["Cut", "Hold", "Drop", "Throw"], correct: 0, hint: "Tool usage" },
    { q: "A taller than B, shorter than C. Tallest?", options: ["A", "B", "C", "D"], correct: 2, hint: "Ranking order" },
    { q: "40 students, Ravi is 8th from top. Rank from bottom?", options: ["32", "33", "34", "35"], correct: 1, hint: "(Total - Top) + 1" },
    { q: "7th from left, 12th from right. Total?", options: ["17", "18", "19", "20"], correct: 1, hint: "(Left + Right) - 1" },
    { q: "Missing number: 4, 16, 36, 64, ?", options: ["81", "100", "121", "144"], correct: 1, hint: "Squares of even numbers" },
    { q: "Odd one out:", options: ["Square", "Rectangle", "Triangle", "Circle"], correct: 3, hint: "Sides vs Curves" },
    { q: "Sun : Day :: Moon : ?", options: ["Sky", "Night", "Light", "Star"], correct: 1, hint: "Time of visibility" },
    { q: "All teachers are educated. Conclusion?", options: ["True", "False", "Cannot say", "None"], correct: 0, hint: "Reverse logic" },
    { q: "5th from left in row of 20. Position from right?", options: ["14", "15", "16", "17"], correct: 2, hint: "(Total - Pos) + 1" },
    { q: "Next number: 7, 14, 28, 56, ?", options: ["84", "96", "112", "120"], correct: 2, hint: "Double the previous" }
  ];

  const quantsQuestions = [
    { q: "What is 20% of 150?", options: ["25", "30", "35", "40"], correct: 1, hint: "0.20 * 150" },
    { q: "Average of 5, 10, 15?", options: ["8", "9", "10", "12"], correct: 2, hint: "Sum / Count" },
    { q: "HCF of 8 and 12?", options: ["2", "4", "6", "8"], correct: 1, hint: "Highest Common Factor" },
    { q: "LCM of 6 and 8?", options: ["12", "18", "24", "48"], correct: 2, hint: "Lowest Common Multiple" },
    { q: "50% of 300?", options: ["100", "120", "150", "200"], correct: 2, hint: "Half of 300" },
    { q: "CP=200, SP=240. Profit?", options: ["20", "30", "40", "50"], correct: 2, hint: "SP - CP" },
    { q: "CP=100, SP=80. Loss?", options: ["10", "20", "25", "30"], correct: 1, hint: "CP - SP" },
    { q: "Ratio of 20 : 40?", options: ["1:2", "2:1", "1:3", "2:3"], correct: 0, hint: "Simplify 20/40" },
    { q: "Average of 10, 20, 30, 40?", options: ["20", "25", "30", "35"], correct: 1, hint: "Sum / 4" },
    { q: "SI on 1000 at 10% for 2 years?", options: ["100", "150", "200", "250"], correct: 2, hint: "(P*R*T)/100" },
    { q: "30% of 500?", options: ["120", "140", "150", "180"], correct: 2, hint: "0.3 * 500" },
    { q: "Work in 5 days. Part in 1 day?", options: ["1/3", "1/4", "1/5", "1/6"], correct: 2, hint: "Reciprocal of days" },
    { q: "Speed=60, Time=2. Distance?", options: ["100", "110", "120", "130"], correct: 2, hint: "Speed * Time" },
    { q: "Square of 12?", options: ["124", "144", "154", "164"], correct: 1, hint: "12 * 12" },
    { q: "Cube of 4?", options: ["32", "48", "64", "72"], correct: 2, hint: "4 * 4 * 4" },
    { q: "10% of 500?", options: ["40", "50", "60", "70"], correct: 1, hint: "Divide by 10" },
    { q: "Boat: 30km in 2 hrs. Speed?", options: ["10", "15", "20", "25"], correct: 1, hint: "Distance / Time" },
    { q: "Perimeter of square (side 5)?", options: ["10", "15", "20", "25"], correct: 2, hint: "4 * side" },
    { q: "Area of rectangle (10x5)?", options: ["40", "45", "50", "55"], correct: 2, hint: "L * W" },
    { q: "25% of 400?", options: ["50", "75", "100", "125"], correct: 2, hint: "One fourth" },
    { q: "Average of first 5 natural numbers?", options: ["2", "3", "4", "5"], correct: 1, hint: "(1+2+3+4+5)/5" },
    { q: "15% of 200?", options: ["20", "25", "30", "35"], correct: 2, hint: "0.15 * 200" },
    { q: "SP=150, CP=120. Profit?", options: ["20", "25", "30", "35"], correct: 2, hint: "SP - CP" },
    { q: "LCM of 3 and 5?", options: ["8", "10", "12", "15"], correct: 3, hint: "Both are prime" },
    { q: "HCF of 9 and 12?", options: ["2", "3", "4", "6"], correct: 1, hint: "Factors of 9 and 12" },
    { q: "Distance=120, Speed=60. Time?", options: ["1", "2", "3", "4"], correct: 1, hint: "D / S" },
    { q: "Square root of 81?", options: ["7", "8", "9", "10"], correct: 2, hint: "What times itself is 81?" },
    { q: "40% of 250?", options: ["80", "90", "100", "110"], correct: 2, hint: "0.4 * 250" },
    { q: "Average of 20 and 30?", options: ["20", "25", "30", "35"], correct: 1, hint: "Sum / 2" },
    { q: "5 workers, 10 days. 1 worker?", options: ["10", "20", "40", "50"], correct: 3, hint: "Inverse proportion (5*10)" }
  ];

  // Helper to get active bank
  const getActiveBank = () => {
    if (selectedModule === "verbal") return verbalQuestions;
    if (selectedModule === "logical") return logicalQuestions;
    if (selectedModule === "quants") return quantsQuestions;
    return [];
  };

  const currentBank = getActiveBank();

  const handleStart = (module) => {
    setSelectedModule(module);
    setShowTest(true);
    setCurrentIdx(0);
    setAnsweredStatus({});
    setStreak(0);
  };

  const handleOptionClick = (qIdx, optIdx) => {
    if (answeredStatus[qIdx]) return;
    const isCorrect = currentBank[qIdx].correct === optIdx;
    if (isCorrect) setStreak(prev => prev + 1);
    else setStreak(0);

    setAnsweredStatus({
      ...answeredStatus,
      [qIdx]: { selected: optIdx, isCorrect }
    });
  };

  const totalAnswered = Object.keys(answeredStatus).length;
  const correctCount = Object.values(answeredStatus).filter(a => a.isCorrect).length;
  const accuracy = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;

  return (
    <div className="practice-wrapper">
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>

      <nav className="top-nav">
        <div className="nav-logo" onClick={() => navigate("/student-dashboard")}>SKILLUP_360</div>
        {showTest && <div className="active-indicator">SYSTEM: {selectedModule.toUpperCase()}</div>}
        <button className="nav-back-btn" onClick={() => showTest ? setShowTest(false) : navigate("/student-dashboard")}>
          {showTest ? "TERMINATE" : "EXIT"}
        </button>
      </nav>

      {!showTest ? (
        <div className="selection-layout">
          <h1 className="main-heading">SELECT_DATA_STREAM</h1>
          <div className="cards-flex">
            {["verbal", "quants", "logical"].map((id) => (
              <div key={id} className={`glass-card ${id === 'verbal' ? 'purple' : id === 'quants' ? 'emerald' : 'cyan'}`} onClick={() => handleStart(id)}>
                <div className="module-icon">{id === 'verbal' ? '◈' : id === 'quants' ? '⌬' : '⧖'}</div>
                <h2>{id.charAt(0).toUpperCase() + id.slice(1)} Ability</h2>
                <div className="card-status">READY_FOR_SYNC</div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="practice-session">
          <div className="session-grid">
            <aside className="question-sidebar">
              <h4 className="side-label">NAV_MAP</h4>
              <div className="question-grid-container">
                {currentBank.map((_, i) => (
                  <div key={i} className={`q-index ${currentIdx === i ? 'active' : ''} ${answeredStatus[i] ? (answeredStatus[i].isCorrect ? 'correct-map' : 'wrong-map') : ''}`} onClick={() => setCurrentIdx(i)}>
                    {i + 1}
                  </div>
                ))}
              </div>
            </aside>
            
            <main className="question-view">
              <div className="glass-workspace">
                <p className="question-text">{currentBank[currentIdx]?.q}</p>
                <div className="options-stack">
                  {currentBank[currentIdx]?.options.map((opt, i) => {
                    let btnClass = "glass-opt";
                    if (answeredStatus[currentIdx]) {
                      if (i === currentBank[currentIdx].correct) btnClass += " correct";
                      else if (i === answeredStatus[currentIdx].selected) btnClass += " wrong";
                    }
                    return (
                      <button key={i} className={btnClass} onClick={() => handleOptionClick(currentIdx, i)}>
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="workspace-footer">
                <button className="ctrl-btn" onClick={() => setCurrentIdx(Math.max(0, currentIdx - 1))}>PREVIOUS</button>
                <button className="ctrl-btn primary" onClick={() => setCurrentIdx(Math.min(currentBank.length - 1, currentIdx + 1))}>
                   {currentIdx === currentBank.length - 1 ? "FINISH" : "SAVE & NEXT"}
                </button>
              </div>
            </main>

            <aside className="analytics-sidebar">
              <div className="glass-mini-card">
                <h4 className="side-label">LIVE_PERFORMANCE</h4>
                <div className="stat-row"><span>ACCURACY</span><span className="stat-val green">{accuracy}%</span></div>
                <div className="stat-row"><span>STREAK</span><span className="stat-val cyan">{streak} 🔥</span></div>
              </div>
              <div className="glass-mini-card">
                <h4 className="side-label">TACTICAL_HINT</h4>
                <p className="hint-text">{currentBank[currentIdx]?.hint}</p>
              </div>
            </aside>
          </div>
        </div>
      )}
    </div>
  );
};

export default PracticePage;