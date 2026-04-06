import { useState } from "react";
import "./AddQuestion.css";
import { useNavigate } from "react-router-dom";

export default function AddQuestion() {
  const nav = useNavigate();

  const [form, setForm] = useState({
    question: "",
    A: "",
    B: "",
    C: "",
    D: "",
    correct: "",
    marks: 5,
  });

  const [questions, setQuestions] = useState([
    { id: 1, text: "What is the capital of France?", correct: "A", answer: "Paris" },
    { id: 2, text: "Solve: 12 + 8 × 2 - 5 = ?", correct: "C", answer: "23" },
    { id: 3, text: "Which planet is known as Red Planet?", correct: "B", answer: "Mars" },
  ]);

  const save = () => {
    if (!form.question) return;

    setQuestions([
      {
        id: Date.now(),
        text: form.question,
        correct: form.correct,
        answer: form[form.correct],
      },
      ...questions,
    ]);
  };

  return (
    <div className="aq-container">

      {/* HEADER */}
      <div className="aq-header">
        <h1>+ Add Question</h1>
        <button className="back-btn" onClick={() => nav("/admin-dashboard")}>
          ← Back
        </button>
      </div>

      {/* MAIN GRID */}
      <div className="aq-grid">

        {/* LEFT SIDE */}
        <div className="aq-left">
          <h3>✏️ Create a New Question</h3>

          <textarea
            placeholder="Type your question here..."
            onChange={(e) => setForm({ ...form, question: e.target.value })}
          />

          {/* OPTIONS */}
          <div className="options-grid">
            {["A", "B", "C", "D"].map((opt) => (
              <div className="option-box" key={opt}>
                <div className={`opt-circle ${opt}`}>{opt}</div>

                <input
                  type="text"
                  placeholder={`Option ${opt}`}
                  onChange={(e) =>
                    setForm({ ...form, [opt]: e.target.value })
                  }
                />

                <input
                  type="radio"
                  name="correct"
                  onChange={() =>
                    setForm({ ...form, correct: opt })
                  }
                />
              </div>
            ))}
          </div>

          {/* BOTTOM */}
          <div className="aq-bottom">
            <select onChange={(e) => setForm({ ...form, correct: e.target.value })}>
              <option>Select Correct Option</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
            </select>

            <input type="number" value={form.marks} />
          </div>

          <button className="save-btn" onClick={save}>
            💾 Save Question →
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="aq-right">
          <div className="right-header">
            <h3>📋 Questions List</h3>
            <input placeholder="Search..." />
          </div>

          {questions.map((q, i) => (
            <div className="q-card" key={q.id}>
              <div className="q-number">{String(i + 1).padStart(2, "0")}</div>

              <div className="q-content">
                <h4>{q.text}</h4>
                <p>Correct: {q.correct} • {q.answer}</p>
              </div>

              <div className="q-actions">
                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}