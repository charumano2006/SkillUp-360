import React from "react";
import { useNavigate } from "react-router-dom";
import "./SelfPreparation.css";

export default function UnifiedSelfPrep() {
  const nav = useNavigate();

  const sections = [
    {
      lvl: "01",
      title: "Self Grooming & Confidence",
      color: "#00eaff",
      content: [
        { h: "The 70/30 Rule", p: "Aim for 70% professional standard and 30% personal style to feel authentic." },
        { h: "Color Psychology", p: "Navy Blue projects trust; Grey projects neutrality. Avoid aggressive reds." },
        { h: "Virtual Setup", p: "Camera at eye level to avoid 'looking down' on recruiters. Use front-facing light." },
        { h: "Confidence Anchoring", p: "Use a 2-minute 'Power Pose' before calls to biologically lower stress hormones." }
      ]
    },
    {
      lvl: "02",
      title: "Communication Mastery",
      color: "#00ff9f",
      content: [
        { h: "The 3-Second Rule", p: "Wait 3 seconds after they finish talking to show you are processing deeply." },
        { h: "Filler Word Detox", p: "Silence is perceived as confidence; replace 'um/uh' with a deliberate pause." },
        { h: "PEEL Framework", p: "Point, Evidence, Explanation, Link. Use this to structure technical explanations." },
        { h: "Vocal Smiling", p: "Physically smile while speaking on audio calls to sound more approachable." }
      ]
    },
    {
      lvl: "03",
      title: "The Perfect 'Self-Intro'",
      color: "#7000ff",
      content: [
        { h: "The 'Hook' Strategy", p: "Start with a specific big achievement (like SkillUp360) to grab interest immediately." },
        { h: "20-50-30 Formula", p: "20% Past (Education), 50% Present (Projects), 30% Future (Goals/Company Fit)." },
        { h: "The 60-Sec Barrier", p: "Keep it under 75 seconds. Respect the interviewer's time to show professionalism." },
        { h: "Skill-Hobby Link", p: "Connect a hobby to a skill, e.g., 'Chess taught me strategic problem-solving'." }
      ]
    },
    {
      lvl: "04",
      title: "Behavioral & STAR Method",
      color: "#ff0055",
      content: [
        { h: "Situation/Task", p: "Describe the specific challenge and the goal you were working toward clearly." },
        { h: "Action (Critical)", p: "Focus on what YOU did specifically. Use 'I' statements rather than 'We'." },
        { h: "Result (Data)", p: "Quantify the outcome. Did you save time? Improve scores? Use numbers." },
        { h: "The Fail Question", p: "When asked about failure, focus 20% on the mistake and 80% on the lesson learned." }
      ]
    },
    {
      lvl: "05",
      title: "Resume & Body Language",
      color: "#f1c40f",
      content: [
        { h: "ATS Engineering", p: "Mirror keywords from the Job Description to pass automated filtering systems." },
        { h: "Active Verbs", p: "Start bullets with 'Developed', 'Optimized', or 'Orchestrated'—not 'Responsible for'." },
        { h: "Eye Contact 70/30", p: "Maintain eye contact 70% of the time. Look at the camera lens, not the screen." },
        { h: "The Handshake/Wave", p: "In person, a firm grip; virtual, a slight professional nod to acknowledge entry." }
      ]
    }
  ];

  return (
    <div className="all-one-root">
      <nav className="all-one-nav">
        <div className="nav-brand">
          <span className="brand-dot"></span>
          <h2>SkillUp360 // PREP_ENGINE</h2>
        </div>
        <button onClick={() => nav("/student-dashboard")}>ESC_DASHBOARD</button>
      </nav>

      <div className="all-one-scroll">
        <div className="all-one-hero">
          <h1>SelfPreparation Module</h1>
          <p>Phase 02: Transforming your technical potential into a career-ready identity.</p>
        </div>

        <div className="all-one-grid">
          {sections.map((s, i) => (
            <div key={i} className="all-one-card glass">
              <div className="card-badge" style={{background: s.color}}>LEVEL_{s.lvl}</div>
              <h3 className="card-title">{s.title}</h3>
              <div className="content-stack">
                {s.content.map((item, idx) => (
                  <div key={idx} className="content-item">
                    <h4 style={{color: s.color}}>{item.h}</h4>
                    <p>{item.p}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}