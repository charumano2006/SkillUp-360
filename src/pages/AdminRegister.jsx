import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Added useNavigate
import "./AdminRegister.css";

const AdminRegister = () => {
  const navigate = useNavigate(); // Initialize navigation

  const handleAdminRegister = (e) => {
    e.preventDefault();
    
    // --- ADMIN REGISTRATION LOGIC ---
    // Perform your backend validation/database entry here.
    // On success, redirect to the dark-themed admin dashboard:
    console.log("Admin account created successfully");
    navigate("/admin-dashboard"); 
  };

  return (
    <div className="ad-reg-wrapper">
      <div className="ad-reg-container">
        
        {/* LEFT PANEL */}
        <div className="ad-reg-left">
          <div className="ad-brand-box">
            <div className="ad-icon">🛡️</div>
            <h1>Admin</h1>
            <p>Create a secure account to manage SkillUp360 resources.</p>
            <Link to="/login/admin" className="ad-btn-login">Login</Link>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="ad-reg-right">
          <div className="ad-top-nav">
             <span className="ad-tag">Management Access</span>
          </div>

          <h2>Apply as an Admin</h2>

          {/* Linked the form to handleAdminRegister */}
          <form className="ad-form" onSubmit={handleAdminRegister}>
            <div className="ad-row">
              <input type="text" placeholder="Full Name *" required />
              <input type="email" placeholder="Work Email *" required />
            </div>

            <div className="ad-row">
              <input type="text" placeholder="Admin ID *" required />
              <input type="text" placeholder="Department *" required />
            </div>

            <div className="ad-row">
              <input type="password" placeholder="Password *" required />
              <select required>
                <option value="">Set Security Question</option>
                <option>What was your first job?</option>
                <option>Favorite administrative tool?</option>
              </select>
            </div>

            <div className="ad-row">
              <input type="password" placeholder="Confirm Password *" required />
              <input type="text" placeholder="Security Answer *" required />
            </div>

            <div className="ad-footer">
              <button type="submit" className="ad-btn-submit">Verify & Register</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default AdminRegister;