import React, { useState } from "react"; // ✅ added
import { Link, useNavigate } from "react-router-dom";
import "./StudentLogin.css";
import axios from "axios"; // ✅ added

const StudentLogin = () => {
  const navigate = useNavigate();

  // ✅ STATE
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  // ✅ HANDLE INPUT
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email: form.email,
          password: form.password,
          role: "student" // 🔥 IMPORTANT
        }
      );

      alert("Login Success ✅");

      // Save token
      localStorage.setItem("token", res.data.token);

      // Navigate
      navigate("/student-dashboard");

    } catch (err) {
      console.log(err);
      alert(err.response?.data?.message || "Login failed ❌");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container-split">
        
        {/* LEFT SIDE */}
        <div className="login-left">
          <div className="brand-content">
            <div className="logo-white-bg"></div>
            <h1>WELCOME</h1>
            <p className="brand-subtitle">TO SKILLUP360</p>
            <p className="brand-text">
              Your journey to placement readiness starts here. Master Verbal, Logical, and Quant with ease.
            </p>
          </div>
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
        </div>

        {/* RIGHT SIDE */}
        <div className="login-right">
          <div className="form-box">
            <h2>Sign in</h2>
            <p className="form-subtitle">Enter your student credentials to continue</p>

            <form className="auth-form" onSubmit={handleSubmit}>
              
              <div className="input-field">
                <label>👤 Email Address</label>
                <input
                  type="email"
                  name="email"            // ✅ added
                  placeholder="User name"
                  required
                  onChange={handleChange} // ✅ added
                />
              </div>

              <div className="input-field">
                <label>🔒 Password</label>
                <input
                  type="password"
                  name="password"         // ✅ added
                  placeholder="••••••••"
                  required
                  onChange={handleChange} // ✅ added
                />
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