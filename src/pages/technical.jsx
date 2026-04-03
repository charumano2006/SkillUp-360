import { useNavigate } from "react-router-dom";
import "./technical.css";

export default function Technical() {
  const nav = useNavigate();

  const languages = [
    {
      name: "Python",
      desc: "Python is widely used in AI, Web, and Automation.",
      icon: "🐍",
    },
    {
      name: "C",
      desc: "C is the foundation of all programming languages.",
      icon: "💻",
    },
    {
      name: "C++",
      desc: "C++ is powerful for competitive coding.",
      icon: "⚡",
    },
    {
      name: "Java",
      desc: "Java is used in enterprise applications.",
      icon: "☕",
    },
  ];

  return (
    <div className="tech-wrapper">
      <h1 className="title">Technical Programming</h1>
      <p className="subtitle">
        Learn Programming from Basics to Advanced
      </p>

      <div className="cards">
        {languages.map((lang) => (
          <div
            key={lang.name}
            className="card"
            onClick={() => nav(`/language/${lang.name}`)}
          >
            <div className="icon">{lang.icon}</div>
            <h2>{lang.name}</h2>
            <p>{lang.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}