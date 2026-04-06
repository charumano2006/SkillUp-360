import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/logo.png" alt="Logo" className="logo-img" />
        <h1 className="logo-text">SkillUp360</h1>
      </div>

      <div className="nav-actions">
        {/* Register Dropdown */}
        <div className="dropdown">
          <button className="auth-btn" onClick={() => setShowRegister(!showRegister)}>
            Register ▼
          </button>
          {showRegister && (
            <div className="dropdown-menu">
              <Link to="/register/student" onClick={() => setShowRegister(false)}>Student</Link>
              <Link to="/register/admin" onClick={() => setShowRegister(false)}>Admin</Link>
            </div>
          )}
        </div>

        {/* Login Dropdown */}
        <div className="dropdown">
          <button className="auth-btn" onClick={() => setShowLogin(!showLogin)}>
            LOGIN ▼
          </button>
          {showLogin && (
            <div className="dropdown-menu">
              <Link to="/student-login" onClick={() => setShowLogin(false)}>Student</Link>
              <Link to="/admin-login" onClick={() => setShowLogin(false)}>Admin</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;