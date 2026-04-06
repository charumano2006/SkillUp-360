import React, { useState } from "react"; // ✅ add useState
import { Link, useNavigate } from "react-router-dom";
import "./AdminLogin.css";
import axios from "axios"; // ✅ add axios

const AdminLogin = () => {
  const navigate = useNavigate();

  // ✅ ADD STATE
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  // ✅ HANDLE INPUT
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ UPDATED LOGIN FUNCTION
  const handleAdminLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email: form.email,
          password: form.password,
          role: "admin" // 🔥 IMPORTANT
        }
      );

      alert("Login Success ✅");

      // Save token
      localStorage.setItem("token", res.data.token);

      // Redirect
      navigate("/admin-dashboard");

    } catch (err) {
      console.log(err);
      alert(err.response?.data?.message || "Login failed ❌");
    }
  };

  return (
    <div className="admin-login-theme-wrapper">
      <div className="admin-theme-container-split">
        
        {/* LEFT SIDE */}
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

        {/* RIGHT SIDE */}
        <div className="admin-theme-right">
          <div className="form-box-centered">
            <h2>Admin Sign in</h2>
            <p className="form-subtitle">Enter your administrative credentials</p>

            <form className="admin-auth-form" onSubmit={handleAdminLogin}>
              
              <div className="admin-input-field">
                <label>👤 Email Address</label>
                <input
                  type="email"
                  name="email"               // ✅ ADD THIS
                  placeholder="admin@skillup360.com"
                  required
                  onChange={handleChange}   // ✅ ADD THIS
                />
              </div>

              <div className="admin-input-field">
                <label>🔒 Password</label>
                <input
                  type="password"
                  name="password"           // ✅ ADD THIS
                  placeholder="••••••••"
                  required
                  onChange={handleChange}   // ✅ ADD THIS
                />
              </div>

              <div className="admin-form-options">
                <label className="admin-remember-me">
                  <input type="checkbox" /> Remember session
                </label>
                <Link to="/forgot-admin" className="admin-forgot-link">Request Reset</Link>
              </div>

              <button type="submit" className="btn-admin-primary">
                Access Dashboard
              </button>
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