import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const students = [
    { name: "Arun", score: "92%" },
    { name: "Priya", score: "88%" },
    { name: "Karthik", score: "84%" }
  ];

  return (
    <div className="admin">
      {/* SIDEBAR - Flex layout to remove empty space */}
      <aside className="sidebar">
        <div className="sidebar-top">
          <h2 className="logo-text">SkillUp360</h2>
          <div className="sidebar-btn-group">
            <button className="nav-btn active" onClick={() => navigate('/admin')}>
              🏠 DASHBOARD
            </button>
            <button className="nav-btn" onClick={() => navigate('/admin/manage-students')}>
              👨‍🎓 STUDENTS
            </button>
            <button className="nav-btn" onClick={() => navigate('/admin/add-question')}>
              ❓ QUESTIONS
            </button>
            <button className="nav-btn" onClick={() => navigate('/admin/create-test')}>
              📝 TESTS
            </button>
            <button className="nav-btn" onClick={() => navigate('/admin/view-reports')}>
              📊 RESULTS
            </button>
          </div>
        </div>

        {/* BOTTOM SECTION - Anchors the design */}
        <div className="sidebar-footer">
          <div className="system-status">
            <span className="status-dot"></span> System Online
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <div className="main">
        {/* TOPBAR */}
        <div className="topbar">
          <input placeholder="Search students or tests..." />
          <div className="admin-badge">👤 Admin</div>
        </div>

        {/* STATS SECTION */}
        <div className="stats">
          <div className="card">
            <h3>👨‍🎓 Students</h3>
            <p>120</p>
          </div>
          <div className="card">
            <h3>📝 Tests</h3>
            <p>15</p>
          </div>
          <div className="card">
            <h3>❓ Questions</h3>
            <p>340</p>
          </div>
          <div className="card">
            <h3>📊 Avg Score</h3>
            <p>72%</p>
          </div>
        </div>

        {/* CENTER ACTION BUTTONS */}
        <div className="actions">
          <button onClick={() => navigate('/admin/add-question')}>Add Question</button>
          <button onClick={() => navigate('/admin/create-test')}>Create Test</button>
          <button onClick={() => navigate('/admin/manage-students')}>Manage Students</button>
          <button onClick={() => navigate('/admin/view-reports')}>View Reports</button>
        </div>

        {/* ANALYTICS PANELS */}
        <div className="grid">
          <div className="panel">
            <h3>Platform Progress</h3>
            <div className="circle">72%</div>
            <p>Average student performance</p>
          </div>

          <div className="panel">
            <h3>Top Students</h3>
            {students.map((s, i) => (
              <p key={i}>🏅 {s.name} - {s.score}</p>
            ))}
          </div>

          <div className="panel">
            <h3>System Activity</h3>
            <p>✔ New test created</p>
            <p>✔ 10 students completed test</p>
            <p>✔ 20 questions added</p>
          </div>
        </div>
      </div>
    </div>
  );
}