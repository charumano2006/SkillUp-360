import React from "react";
import { Link } from "react-router-dom";
import "./LearningSections.css";

function LearningSections() {
  return (
    <div
      className="learning-page"
      style={{ backgroundImage: "url('/learning-bg.jpg')" }}
    >

      <nav className="navbar">

  <div className="nav-left">
    <h2 className="welcome-text">Welcome to Learning Section</h2>
  </div>

  <div className="nav-right">
  <Link to="/" className="nav-link">Home</Link>
  <Link to="/student-dashboard" className="nav-link">Dashboard</Link>
</div>

</nav>

      

      {/* CARDS */}
      <div className="learning-cards">

        {/* VERBAL */}
        <div className="learn-card">
          <h2>VERBAL</h2>
          <img src="/verbal-card.png" alt="verbal" className="card-image" />


          <Link to="/verbal">
            <button>Start Learning</button>
          </Link>
        </div>

        {/* LOGICAL */}
        <div className="learn-card">
          <h2>LOGICAL</h2>

          <img src="/logical-card.png" alt="logical" className="card-image" />

          <Link to="/logical">
            <button>Start Learning</button>
          </Link>
        </div>

        {/* QUANT */}
        <div className="learn-card">
          <h2>QUANTITATIVE</h2>

          <img src="/quant-card.png" alt="quantative" className="card-image" />

          <Link to="/quant">
            <button>Start Learning</button>
          </Link>
        </div>

      </div>

    </div>
  );
}

export default LearningSections;