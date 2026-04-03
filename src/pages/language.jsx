import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./language.css";

export default function LanguagePage() {
  const { name } = useParams();
  const navigate = useNavigate();

  const topics = [
    {
      title: "Functions",
      summary: "Functions help reuse code and make programs clean.",
      explanation: [
        "Functions are blocks of reusable code.",
        "Defined using def keyword in Python.",
        "Can take inputs (parameters).",
        "Can return outputs.",
        "Improves modular programming."
      ],
      syntax: "def function_name():",
      example: "def add(a,b): return a+b",
      practice: "Write a function to find factorial.",
      video: "https://www.youtube.com/embed/kqtD5dpn9C8"
    }
  ];

  const [active, setActive] = useState(0);
  const topic = topics[active];

  return (
    <div className="page">

      {/* NAVBAR */}
      <div className="topbar">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/dashboard")}>
          Dashboard
        </button>
        <button onClick={() => navigate("/technical")}>
          Back
        </button>
      </div>

      <div className="layout">

        {/* SIDEBAR */}
        <div className="sidebar">
          {topics.map((t, i) => (
            <div
              key={i}
              className={active === i ? "active" : ""}
              onClick={() => setActive(i)}
            >
              {t.title}
            </div>
          ))}
        </div>

        {/* CONTENT */}
        <div className="content">

          <h1>{topic.title}</h1>

          {/* SUMMARY */}
          <div className="box">
            <h3>📌 Summary</h3>
            <p>{topic.summary}</p>
          </div>

          {/* EXPLANATION */}
          <div className="box">
            <h3>📘 Explanation</h3>
            <ul>
              {topic.explanation.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </div>

          {/* SYNTAX */}
          <div className="box code">
            <h3>💻 Syntax</h3>
            <pre>{topic.syntax}</pre>
          </div>

          {/* EXAMPLE */}
          <div className="box code">
            <h3>💡 Example</h3>
            <pre>{topic.example}</pre>
          </div>

          {/* PRACTICE */}
          <div className="box">
            <h3>🧪 Practice</h3>
            <p>{topic.practice}</p>
          </div>

          {/* VIDEO */}
          <div className="video">
            <iframe src={topic.video} allowFullScreen />
          </div>

        </div>
      </div>
    </div>
  );
}