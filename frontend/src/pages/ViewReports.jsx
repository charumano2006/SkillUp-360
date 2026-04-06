import React, { useEffect, useState } from "react";
import "./ViewReports.css";
import { useNavigate } from "react-router-dom";

const ViewReports = () => {
  const navigate = useNavigate();

  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/test/results");
        const data = await res.json();

        if (data.length > 0) {
          // 👉 take latest result
          setResult(data[0]);
        }
      } catch (err) {
        console.log("Error fetching results:", err);
      }
    };

    fetchResults();
  }, []);

  if (!result) {
    return <h2 style={{ color: "white", textAlign: "center" }}>Loading Report...</h2>;
  }

  return (
    <div className="report-wrapper">

      <div className="report-header">
        <h1>PERFORMANCE_REPORT</h1>
        <button onClick={() => navigate("/student-dashboard")}>
          ESC_DASHBOARD
        </button>
      </div>

      <div className="report-container">

        {/* LEFT CARD */}
        <div className="report-left">
          <div className="circle">
            <h2>{result.percentage}%</h2>
          </div>

          <h3>PLACEMENT_READY</h3>
          <p>Overall skill evaluation complete.</p>
        </div>

        {/* RIGHT SIDE */}
        <div className="report-right">

          <div className="bar">
            <p>📚 Verbal Ability</p>
            <div className="progress">
              <div style={{ width: `${result.percentage}%` }}></div>
            </div>
            <span>{result.percentage}%</span>
          </div>

          <div className="bar">
            <p>📊 Quantitative</p>
            <div className="progress">
              <div style={{ width: `${result.percentage}%` }}></div>
            </div>
            <span>{result.percentage}%</span>
          </div>

          <div className="bar">
            <p>🧠 Logical Reasoning</p>
            <div className="progress">
              <div style={{ width: `${result.percentage}%` }}></div>
            </div>
            <span>{result.percentage}%</span>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ViewReports;