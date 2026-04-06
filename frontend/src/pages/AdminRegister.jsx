import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./AdminRegister.css";

const AdminRegister = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    department: "",
    password: "",
    confirmPassword: "",
    securityQuestion: "What was your first job?", // ✅ DEFAULT FIX
    securityAnswer: "",
    secretKey: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdminRegister = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/admin-register",
        {
          fullName: form.fullName,
          email: form.email,
          department: form.department,
          password: form.password,
          securityQuestion: form.securityQuestion,
          securityAnswer: form.securityAnswer,
          secretKey: form.secretKey
        }
      );

      alert(res.data.message);

      if (res.data.success) {
        navigate("/admin-login");
      }

    } catch (err) {
      console.log(err);
      console.log("FULL ERROR:", err);
console.log("BACKEND ERROR:", err.response?.data);

alert(JSON.stringify(err.response?.data));
      console.log(err.response?.data);
    }
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

          <form className="ad-form" onSubmit={handleAdminRegister}>

            <div className="ad-row">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name *"
                required
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Work Email *"
                required
                onChange={handleChange}
              />
            </div>

            <div className="ad-row">
              <input
                type="text"
                name="department"
                placeholder="Department *"
                required
                onChange={handleChange}
              />
              <input
                type="text"
                name="secretKey"
                placeholder="Admin Secret Key *"
                required
                onChange={handleChange}
              />
            </div>

            <div className="ad-row">
              <input
                type="password"
                name="password"
                placeholder="Password *"
                required
                onChange={handleChange}
              />

              <select
                name="securityQuestion"
                value={form.securityQuestion}   // ✅ FIX
                onChange={handleChange}
              >
                <option>What was your first job?</option>
                <option>Favorite administrative tool?</option>
              </select>
            </div>

            <div className="ad-row">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password *"
                required
                onChange={handleChange}
              />

              <input
                type="text"
                name="securityAnswer"
                placeholder="Security Answer *"
                required
                onChange={handleChange}
              />
            </div>

            <div className="ad-footer">
              <button type="submit" className="ad-btn-submit">
                Verify & Register
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};

export default AdminRegister;