import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProgressPage.css";

export default function TrackProgress() {
  const nav = useNavigate();

  // Mock data representing student performance
  const topics = [
    { name: "Quantitative Aptitude", score: 85, status: "Strong", tips: "Excellent speed. Try mastering advanced Permutation & Combination." },
    { name: "Verbal Ability", score: 42, status: "Weak", tips: "Focus on Reading Comprehension and active vocabulary building." },
    { name: "Logical Reasoning", score: 78, status: "Strong", tips: "Keep practicing syllogisms and data arrangement puzzles." },
    { name: "Python (Technical)", score: 35, status: "Weak", tips: "Revisit List Comprehensions and Decorators. Practice on 'Hard' mode." },
    { name: "Self-Introduction", score: 90, status: "Strong", tips: "Your 'Hook' is perfect. Keep your energy consistent." }
  ];

  const weakTopics = topics.filter(t => t.status === "Weak");
  const strongTopics = topics.filter(t => t.status === "Strong");

  return (
    <div className="pg-root">
      <nav className="pg-nav">
        <div className="nav-left">
          <div className="pg-pulse"></div>
          <h2>SkillUp360 // PERFORMANCE_TRACKER</h2>
        </div>
        <button onClick={() => nav("/dashboard")} className="pg-esc">ESC_DASHBOARD</button>
      </nav>

      <div className="pg-scroll">
        <header className="pg-header">
          <h1>Analytics_Overview</h1>
          <p>Real-time analysis of your skill evaluation and placement readiness.</p>
        </header>

        <div className="pg-summary-grid">
          {/* WEAK TOPICS PANEL */}
          <div className="pg-card weak-border glass">
            <div className="pg-card-tag red">NEEDS_ATTENTION</div>
            <h3>🚨 Weak Areas</h3>
            <div className="topic-list">
              {weakTopics.map((t, i) => (
                <div key={i} className="topic-item">
                  <div className="topic-main">
                    <span>{t.name}</span>
                    <span className="score-val">{t.score}%</span>
                  </div>
                  <p className="topic-tips">💡 {t.tips}</p>
                  
                </div>
              ))}
            </div>
          </div>

          {/* STRONG TOPICS PANEL */}
          <div className="pg-card strong-border glass">
            <div className="pg-card-tag green">MASTERED_MODULES</div>
            <h3>✅ Strong Areas</h3>
            <div className="topic-list">
              {strongTopics.map((t, i) => (
                <div key={i} className="topic-item">
                  <div className="topic-main">
                    <span>{t.name}</span>
                    <span className="score-val">{t.score}%</span>
                  </div>
                  <p className="topic-tips">🚀 {t.tips}</p>
                  
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* STRATEGIC INSIGHTS SECTION */}
        <section className="pg-insights glass">
          <h3>🧠 Strategic Growth Ideas</h3>
          <div className="insights-grid">
            <div className="insight-box">
              <h4>The 80/20 Rule</h4>
              <p>Spend 80% of your time on your weak areas (Python & Verbal) to balance your profile.</p>
            </div>
            <div className="insight-box">
              <h4>Mock Consistency</h4>
              <p>Your Logical Reasoning score fluctuates. Take 3 daily 10-minute mini-tests.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}