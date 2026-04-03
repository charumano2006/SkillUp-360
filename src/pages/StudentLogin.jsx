import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Added useNavigate
import "./StudentLogin.css";

const StudentLogin = () => {
  const navigate = useNavigate(); // Initialize the navigate hook

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // --- AUTHENTICATION LOGIC GOES HERE ---
    // For now, it will directly navigate to the student dashboard
    console.log("Student Logged In");
    navigate("/student-dashboard"); // Navigate to the correct route
  };

  return (
    <div className="login-wrapper">
      <div className="login-container-split">
        
        {/* LEFT BRANDING SIDE */}
        <div className="login-left">
          <div className="brand-content">
            <div className="logo-white-bg">
              {/* Logo icon/image can go here */}
            </div>
            <h1>WELCOME</h1>
            <p className="brand-subtitle">TO SKILLUP360</p>
            <p className="brand-text">
              Your journey to placement readiness starts here. Master Verbal, Logical, and Quant with ease.
            </p>
          </div>
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
        </div>

        {/* RIGHT FORM SIDE */}
        <div className="login-right">
          <div className="form-box">
            <h2>Sign in</h2>
            <p className="form-subtitle">Enter your student credentials to continue</p>

            {/* Added onSubmit handler to the form */}
            <form className="auth-form" onSubmit={handleSubmit}>
              <div className="input-field">
                <label>👤 Email Address</label>
                <input type="email" placeholder="User name" required />
              </div>

              <div className="input-field">
                <label>🔒 Password</label>
                <input type="password" placeholder="••••••••" required />
              </div>

              <div className="form-options">
                <label className="remember-me">
                  <input type="checkbox" /> Remember me
                </label>
                <Link to="/forgot" className="forgot-link">Forgot Password?</Link>
              </div>

              <button type="submit" className="btn-signin">Sign in</button>
            </form>

            <div className="or-divider"><span>OR</span></div>
            
            <button className="btn-google" type="button">
               Sign in with Google
            </button>

            <p className="footer-text">
              Don't have an account? <Link to="/register/student">Sign up</Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StudentLogin;