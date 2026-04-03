import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Added useNavigate
import "./StudentRegister.css";

const StudentRegister = () => {
  const navigate = useNavigate(); // Initialize navigation

  const handleRegister = (e) => {
    e.preventDefault();
    
    // --- REGISTRATION API LOGIC ---
    // Here you would send the data to your database.
    // On a successful response, navigate to the dashboard:
    console.log("Student Registration Successful");
    navigate("/student-dashboard"); 
  };

  return (
    <div className="st-reg-wrapper">
      <div className="st-reg-container">
        
        {/* LEFT PANEL */}
        <div className="st-reg-left">
          <div className="st-brand-box">
            <div className="st-icon">🚀</div>
            <h1>Welcome</h1>
            <p>You are 30 seconds away from boosting your placement readiness!</p>
            <Link to="/login/student" className="st-btn-login">Login</Link>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="st-reg-right">
          <div className="st-top-nav">
             <span className="st-tag">Student Portal</span>
          </div>

          <h2>Apply as a Student</h2>

          {/* Linked the form to handleRegister */}
          <form className="st-form" onSubmit={handleRegister}>
            <div className="st-row">
              <input type="text" placeholder="First Name *" required />
              <input type="email" placeholder="Your Email *" required />
            </div>

            <div className="st-row">
              <input type="text" placeholder="Last Name *" required />
              <input type="text" placeholder="Phone Number *" required />
            </div>

            <div className="st-row">
              <input type="password" placeholder="Password *" required />
              <select required>
                <option value="">Security Question</option>
                <option>Your high school name?</option>
                <option>Your pet's name?</option>
              </select>
            </div>

            <div className="st-row">
              <input type="password" placeholder="Confirm Password *" required />
              <input type="text" placeholder="Answer *" required />
            </div>

            <div className="st-gender">
              <label><input type="radio" name="gender" /> Male</label>
              <label><input type="radio" name="gender" /> Female</label>
            </div>

            <div className="st-footer">
              <button type="submit" className="st-btn-submit">Register</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default StudentRegister;