import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ViewReports.css";

export default function ViewReports() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  
  // State to toggle between the list and student details
  const [selectedStudent, setSelectedStudent] = useState(null);

  const data = [
    { name: "Arun", test: "React", score: 92, time: "25m", correct: 18, incorrect: 2 },
    { name: "Priya", test: "JS", score: 85, time: "28m", correct: 17, incorrect: 3 },
    { name: "Karthik", test: "HTML", score: 40, time: "30m", correct: 8, incorrect: 12 },
    { name: "Divya", test: "CSS", score: 76, time: "22m", correct: 15, incorrect: 5 },
    { name: "varsha", test: "CSS", score: 66, time: "22m", correct: 12, incorrect: 7 },
    { name: "bavya", test: "CSS", score: 36, time: "22m", correct: 14, incorrect: 9 },
    { name: "charu", test: "CSS", score: 56, time: "22m", correct: 12, incorrect: 4 },
  ];

  const filtered = data.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase()) &&
    (filter === "All" || 
     (filter === "Pass" && d.score >= 50) || 
     (filter === "Fail" && d.score < 50))
  );

  return (
    <div className="vr-page">
      {/* HEADER SECTION */}
      <header className="vr-header">
        <h1 className="vr-title">📊 View Reports</h1>
        <button className="back-btn" onClick={() => navigate("/admin-dashboard")}>
          ← Back to Dashboard
        </button>
      </header>

      {/* MAIN CONTENT TOGGLE */}
      {!selectedStudent ? (
        <>
          {/* SEARCH & FILTER CONTROLS */}
          <section className="vr-controls">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search student by name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="filter-box">
              <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="All">All Results</option>
                <option value="Pass">Passed Only</option>
                <option value="Fail">Failed Only</option>
              </select>
            </div>
          </section>

          <div className="vr-main-grid">
            {/* LEFT COLUMN: SCROLLABLE LIST */}
            <div className="vr-list-container">
              {filtered.length > 0 ? (
                filtered.map((d, i) => (
                  <div key={i} className="report-card">
                    <div className="card-top">
                      <h3>{d.name}</h3>
                      <span className={`status-badge ${d.score >= 50 ? "pass" : "fail"}`}>
                        {d.score >= 50 ? "PASSED" : "FAILED"}
                      </span>
                    </div>
                    <div className="card-body">
                      <p><span className="label">Test:</span> {d.test}</p>
                      <p><span className="label">Score:</span> {d.score}%</p>
                    </div>
                    <button 
                      className="view-details-btn interactive-btn"
                      onClick={() => setSelectedStudent(d)}
                    >
                      View Full Analysis
                    </button>
                  </div>
                ))
              ) : (
                <p className="no-results">No student records found.</p>
              )}
            </div>

            {/* RIGHT COLUMN: STATS SIDEBAR */}
            <aside className="vr-stats-sidebar">
              <div className="stats-card glass-panel">
                <h3>Total Students</h3>
                <div className="stats-circle">{data.length}</div>
                <p className="stats-subtext">Active Participants</p>
              </div>

              <div className="stats-card glass-panel">
                <h3>Top Performer</h3>
                <div className="stats-circle small-circle">92%</div>
                <p className="performer-name">{data[0].name}</p>
                <p className="stats-subtext">{data[0].test} Expert</p>
              </div>

              {/* NEW: QUICK INSIGHTS (Fills the empty space) */}
              <div className="stats-card glass-panel quick-insights">
                <h3>Quick Insights</h3>
                <div className="insights-list">
                  <div className="insight-item">
                    <span>Avg. Score</span>
                    <span className="cyan-txt">72.3%</span>
                  </div>
                  <div className="insight-item">
                    <span>Pass Rate</span>
                    <span className="cyan-txt">75%</span>
                  </div>
                  <div className="insight-item">
                    <span>Active Tests</span>
                    <span className="cyan-txt">12</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </>
      ) : (
        /* INDIVIDUAL STUDENT DETAIL VIEW */
        <div className="detail-view-container glass-panel">
          <button className="close-detail" onClick={() => setSelectedStudent(null)}>
            ✖ Close Analysis
          </button>
          
          <div className="detail-header">
            <h2>Performance Profile: {selectedStudent.name}</h2>
            <p className="test-tag">{selectedStudent.test} Certification Test</p>
          </div>

          <div className="detail-grid">
            <div className="detail-stat">
              <span>Final Score</span>
              <h1 className={selectedStudent.score >= 50 ? "pass-txt" : "fail-txt"}>
                {selectedStudent.score}%
              </h1>
            </div>
            <div className="detail-stat">
              <span>Time Taken</span>
              <h3>{selectedStudent.time}</h3>
            </div>
            <div className="detail-stat">
              <span>Accuracy</span>
              <h3>{selectedStudent.correct} Correct / {selectedStudent.incorrect} Wrong</h3>
            </div>
          </div>

          <div className="performance-bar-bg">
            <div 
              className="performance-bar-fill" 
              style={{ width: `${selectedStudent.score}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}