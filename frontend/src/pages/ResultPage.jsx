import React from "react";
import { useNavigate } from "react-router-dom";
import "./ResultPage.css";

const ResultPage = () => {
  const navigate = useNavigate();

  const subjects = [
    { name: "Verbal Ability", score: 85, color: "#00eaff", icon: "📝" },
    { name: "Quantitative", score: 62, color: "#7000ff", icon: "📊" },
    { name: "Logical Reasoning", score: 90, color: "#ff0055", icon: "🧠" },
  ];

  return (
    <div className="report-root">
      <header className="report-header">
        <h1 className="glitch-text">PERFORMANCE_REPORT</h1>
        <button className="esc-btn" onClick={() => navigate("/student-dashboard")}>
          ESC_DASHBOARD
        </button>
      </header>

      <div className="report-grid">
        {/* LEFT PANEL: OVERALL STATUS */}
        <section className="status-panel">
          <div className="circular-progress">
            <svg viewBox="0 0 36 36" className="ring">
              <path className="ring-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path className="ring-fill" strokeDasharray="78, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <text x="18" y="20.35" className="ring-text">78%</text>
            </svg>
          </div>
          <h2 className="ready-text">PLACEMENT_READY</h2>
          <p className="sub-text">Overall skill evaluation complete.</p>
        </section>

        {/* RIGHT PANEL: SUBJECT BARS */}
        <section className="subject-panel">
          {subjects.map((s) => (
            <div key={s.name} className="subject-card">
              <div className="subject-info">
                <span>{s.icon} {s.name}</span>
              </div>
              <div className="progress-container">
                <div className="progress-bar" style={{ width: `${s.score}%`, backgroundColor: s.color }}></div>
              </div>
              <span className="score-label">{s.score}%</span>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ResultPage;