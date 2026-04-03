import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Added useNavigate
import "./AdminLogin.css";

const AdminLogin = () => {
  const navigate = useNavigate(); // Initialize the navigate hook

  const handleAdminLogin = (e) => {
    e.preventDefault();

    // --- ADMIN AUTHENTICATION LOGIC ---
    // This is where you would verify credentials against your database.
    console.log("Admin accessing the system...");

    // On success, navigate to the secure admin dashboard
    navigate("/admin-dashboard");
  };

  return (
    <div className="admin-login-theme-wrapper">
      <div className="admin-theme-container-split">
        
        {/* LEFT BRANDING SIDE - Blue Theme */}
        <div className="admin-theme-left">
          <div className="brand-content">
            <h1>ADMIN</h1>
            <p className="brand-subtitle">CONTROL PANEL</p>
            <p className="brand-text">
              Access the SkillUp360 management dashboard to monitor student progress, 
              manage evaluations, and update placement resources.
            </p>
          </div>
          <div className="theme-shape shape-1"></div>
          <div className="theme-shape shape-2"></div>
        </div>

        {/* RIGHT FORM SIDE - Fixed Alignment */}
        <div className="admin-theme-right">
          <div className="form-box-centered">
            <h2>Admin Sign in</h2>
            <p className="form-subtitle">Enter your administrative credentials</p>

            {/* Added onSubmit handler to trigger navigation */}
            <form className="admin-auth-form" onSubmit={handleAdminLogin}>
              <div className="admin-input-field">
                <label>👤 Email Address</label>
                <input type="email" placeholder="admin@skillup360.com" required />
              </div>

              <div className="admin-input-field">
                <label>🔒 Password</label>
                <input type="password" placeholder="••••••••" required />
              </div>

              <div className="admin-form-options">
                <label className="admin-remember-me">
                  <input type="checkbox" /> Remember session
                </label>
                <Link to="/forgot-admin" className="admin-forgot-link">Request Reset</Link>
              </div>

              <button type="submit" className="btn-admin-primary">Access Dashboard</button>
            </form>

            <div className="admin-or-divider"><span>SECURE ACCESS</span></div>
            
            <p className="admin-footer-text">
              Need admin access? <Link to="/contact">Contact System Superuser</Link>
            </p>
            
            <Link to="/" className="admin-back-link">← Return to Home</Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminLogin;