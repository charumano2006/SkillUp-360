import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateTest.css';

export default function CreateTest() {
  const navigate = useNavigate();

  return (
    <div className="simple-ct-wrapper">
      {/* HEADER WITH PRIMARY ACTION */}
      <header className="simple-header">
        <h1 className="header-title"><span className="cyan-text">+</span> Create Test</h1>
        <div className="header-buttons">
          <button className="main-create-btn">🚀 Create Test Now</button>
          <button className="back-link" onClick={() => navigate('/admin-dashboard')}>Back to Dashboard</button>
        </div>
      </header>

      <div className="simple-content-container">
        <div className="simple-grid">
          
          {/* LEFT: FORM ENTRIES */}
          <div className="form-column">
            <section className="simple-card">
              <h3 className="card-label">📋 Test Details</h3>
              <div className="input-group">
                <label>Test Title</label>
                <input type="text" placeholder="e.g., Python Basics Quiz" className="full-input" />
              </div>
              <div className="input-row">
                <div className="input-group">
                  <label>Duration (Min)</label>
                  <input type="number" placeholder="30" className="full-input" />
                </div>
                <div className="input-group">
                  <label>Total Marks</label>
                  <input type="number" placeholder="50" className="full-input" />
                </div>
              </div>
            </section>

            <section className="simple-card">
              <h3 className="card-label">✍️ Add New Question</h3>
              <div className="input-group">
                <label>Question Text</label>
                <textarea placeholder="Type your question here..." className="simple-textarea"></textarea>
              </div>
              <div className="options-grid">
                {['A', 'B', 'C', 'D'].map(id => (
                  <div key={id} className="opt-input">
                    <span className="opt-letter">{id}</span>
                    <input type="text" placeholder={`Option ${id}`} />
                  </div>
                ))}
              </div>
              {/* ACCESSIBLE ADD TO LIST */}
              <button className="add-to-list-btn">+ Add to List</button>
            </section>
          </div>

          {/* RIGHT: OVERVIEW & LIST */}
          <div className="list-column">
            <section className="simple-card status-box">
              <h3 className="card-label">🌐 Overview</h3>
              <div className="progress-circle">
                <span className="count">5 / 20</span>
                <p>Questions</p>
              </div>
            </section>

            <section className="simple-card">
              <h3 className="card-label">📜 Selected Questions</h3>
              <div className="simple-question-list">
                <div className="list-item">
                  <p>1. What is React?</p>
                  <span className="difficulty-tag">Easy</span>
                </div>
                <div className="list-item">
                  <p>2. Explain the Virtual DOM...</p>
                  <span className="difficulty-tag">Hard</span>
                </div>
              </div>
            </section>
          </div>

        </div>
      </div>
    </div>
  );
}