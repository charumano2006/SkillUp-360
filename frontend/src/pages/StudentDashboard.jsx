import React from "react";
import { Link } from "react-router-dom";
import "./StudentDashboard.css";

function StudentDashboard({ userName = "Student" }) {
  return (
    <div className="hud-simple-wrapper">
      <div className="hud-bg-gradient"></div>
      
      {/* Sidebar - EXACTLY as you had it */}
      <aside className="hud-sidebar">
        <h2 className="hud-logo">🎓 SkillUp360</h2>
        <nav>
          <ul>
            <li className="active"><Link to="/student-dashboard">Dashboard</Link></li>
            <li><Link to="/learning">Learning Sections</Link></li>
            <li><Link to="/practice">Practice</Link></li>
            <li><Link to="/tests">Tests</Link></li>
            <li><Link to="/results">Results</Link></li>
            <li><Link to="/progress">Progress</Link></li>
            <li><Link to="/chatbot">Chatbot</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </nav>
      </aside>

      <main className="hud-content">
        {/* COMPACT WELCOME CARD - Your original content, just smaller */}
        <header className="welcome-card-small">
          <div className="text-box">
            <h2>Welcome back, <span className="cyan-text">{userName}!</span></h2>
            <p>Refine your skills and prepare for your career milestones.</p>
          </div>
          <div className="user-avatar-small">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="student" />
          </div>
        </header>

        {/* 8 CARDS GRID - Your original content with extra 2 cards */}
        <div className="hud-grid">
          <Link to="/learning" className="glass-card">
            <h3>📚 Learning Sections</h3>
            <p>Study Verbal, Logical and Quantitative topics.</p>
          </Link>
          <Link to="/practice" className="glass-card">
            <h3>📝 Practice Questions</h3>
            <p>Practice aptitude problems topic-wise.</p>
          </Link>
          <Link to="/tests" className="glass-card">
            <h3>⏱ Take Tests</h3>
            <p>Attempt full-length aptitude tests.</p>
          </Link>
          <Link to="/results" className="glass-card">
            <h3>📊 View Results</h3>
            <p>Check your test scores and performance.</p>
          </Link>
          <Link to="/technical" className="glass-card">
            <h3>💻 Technical Programming</h3>
            <p>Master Python, C++, and Java coding challenges.</p>
          </Link>
          <Link to="/self-prep" className="glass-card">
            <h3>🛡️ Self Preparation</h3>
            <p>Manage interview checklists and personality prep.</p>
          </Link>
          <Link to="/progress" className="glass-card">
            <h3>📈 Track Progress</h3>
            <p>Analyze your improvement and weak areas.</p>
          </Link>
          <Link to="/chatbot" className="glass-card">
            <h3>🤖 Chatbot Help</h3>
            <p>Ask doubts and get instant guidance.</p>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default StudentDashboard;