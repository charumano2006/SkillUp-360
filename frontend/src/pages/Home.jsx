import { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  const [dropdown, setDropdown] = useState(null); // 'login', 'register', or null

  const toggleDropdown = (type) => {
    setDropdown(dropdown === type ? null : type);
  };

  return (
    <div className="home-container">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-left">
          <img src="/logo.png" alt="logo" className="logo"/>
          <span className="logo-text">SkillUp360</span>
        </div>

        <div className="nav-right">
          {/* REGISTER DROPDOWN */}
          <div className="dropdown-wrapper">
            <button className="nav-btn" onClick={() => toggleDropdown('register')}>
              Register ▾
            </button>
            {dropdown === 'register' && (
              <div className="dropdown-menu">
                <Link to="/register/student" className="dropdown-item">🎓 Student Register</Link>
                <Link to="/register/admin" className="dropdown-item">🛠 Admin Register</Link>
              </div>
            )}
          </div>

          {/* LOGIN DROPDOWN */}
          <div className="dropdown-wrapper">
            <button className="nav-btn" onClick={() => toggleDropdown('login')}>
              Login ▾
            </button>
            {dropdown === 'login' && (
              <div className="dropdown-menu">
                <Link to="/login/student" className="dropdown-item">🎓 Student Login</Link>
                <Link to="/login/admin" className="dropdown-item">🛠 Admin Login</Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* CENTER CONTENT */}
      <div className="main-content">
        <div className="glass-panel">
          <h2 className="cyan-text">Welcome to SkillUp360</h2>
          <p>
            SkillUp360 is an integrated platform designed to help students
            improve their aptitude, logical reasoning, and quantitative
            problem-solving skills. The system evaluates performance and
            provides structured guidance to enhance placement readiness.
          </p>
        </div>

        <div className="card-grid">
          <div className="info-card">
            <h3 className="cyan-text">Verbal</h3>
            <p>Improve vocabulary and communication skills.</p>
          </div>
          <div className="info-card">
            <h3 className="cyan-text">Logical</h3>
            <p>Strengthen analytical and reasoning ability.</p>
          </div>
          <div className="info-card">
            <h3 className="cyan-text">Quant</h3>
            <p>Practice quantitative aptitude problems.</p>
          </div>
        </div>
      </div>

      <footer className="home-footer">
        Contact | support@skillup360.com
      </footer>
    </div>
  );
}

export default Home;