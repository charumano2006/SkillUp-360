import React, { useState } from "react"; // ✅ added
import { Link, useNavigate } from "react-router-dom";
import "./StudentRegister.css";
import axios from "axios"; // ✅ added

const StudentRegister = () => {
  const navigate = useNavigate();

  // ✅ STATE
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    securityQuestion: "",
    answer: "",
    gender: ""
  });

  // ✅ HANDLE CHANGE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ SUBMIT FUNCTION
  const handleRegister = async (e) => {
    e.preventDefault();

    // 🔴 password check
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/student-register",
        {
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          password: form.password,
          securityQuestion: form.securityQuestion,
          answer: form.answer,
          gender: form.gender
        }
      );

      alert(res.data.message);

      if (res.data.success) {
        navigate("/student-dashboard");
      }

    } catch (err) {
      console.log(err);
      alert(err.response?.data?.message || "Registration failed ❌");
    }
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

          <form className="st-form" onSubmit={handleRegister}>
            <div className="st-row">
              <input type="text" name="firstName" placeholder="First Name *" required onChange={handleChange} />
              <input type="email" name="email" placeholder="Your Email *" required onChange={handleChange} />
            </div>

            <div className="st-row">
              <input type="text" name="lastName" placeholder="Last Name *" required onChange={handleChange} />
              <input type="text" name="phone" placeholder="Phone Number *" required onChange={handleChange} />
            </div>

            <div className="st-row">
              <input type="password" name="password" placeholder="Password *" required onChange={handleChange} />
              
              <select name="securityQuestion" required onChange={handleChange}>
                <option value="">Security Question</option>
                <option>Your high school name?</option>
                <option>Your pet's name?</option>
              </select>
            </div>

            <div className="st-row">
              <input type="password" name="confirmPassword" placeholder="Confirm Password *" required onChange={handleChange} />
              <input type="text" name="answer" placeholder="Answer *" required onChange={handleChange} />
            </div>

            <div className="st-gender">
              <label>
                <input type="radio" name="gender" value="male" onChange={handleChange} /> Male
              </label>
              <label>
                <input type="radio" name="gender" value="female" onChange={handleChange} /> Female
              </label>
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