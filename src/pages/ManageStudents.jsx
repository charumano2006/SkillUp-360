import { useState } from "react";
import "./ManageStudents.css";
import { useNavigate } from "react-router-dom";

export default function ManageStudents() {

  const nav = useNavigate();

  const [students, setStudents] = useState([
    { id: 1, name: "Dhanush", email: "d@gmail.com", status: "Active", score: "80%" },
    { id: 2, name: "Arun", email: "a@gmail.com", status: "Blocked", score: "65%" },
    { id: 3, name: "Priya", email: "p@gmail.com", status: "Active", score: "92%" }
  ]);

  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const toggleStatus = (id) => {
    setStudents(students.map(s =>
      s.id === id
        ? { ...s, status: s.status === "Active" ? "Blocked" : "Active" }
        : s
    ));
  };

  const deleteStudent = (id) => {
    setStudents(students.filter(s => s.id !== id));
  };

  const filtered = students.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="manage-page">

      {/* HEADER */}
      <div className="header">
        <h1>Manage Students</h1>
        <button className="back-btn" onClick={() => nav("/admin-dashboard")}>⬅ Back</button>
      </div>

      {/* STATS */}
      <div className="stats">
        <div className="stat-box">Total: {students.length}</div>
        <div className="stat-box">Active: {students.filter(s=>s.status==="Active").length}</div>
        <div className="stat-box">Blocked: {students.filter(s=>s.status==="Blocked").length}</div>
      </div>

      {/* SEARCH */}
      <input
        className="search"
        placeholder="🔍 Search student..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* TABLE */}
      <div className="table-box">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Score</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((s) => (
              <tr key={s.id}>
                <td>{s.name}</td>
                <td>{s.email}</td>

                <td>
                  <span className={s.status === "Active" ? "active" : "blocked"}>
                    {s.status}
                  </span>
                </td>

                <td>{s.score}</td>

                <td>
                  <button className="btn toggle" onClick={() => toggleStatus(s.id)}>Toggle</button>
                  <button className="btn view" onClick={() => setSelected(s)}>View</button>
                  <button className="btn delete" onClick={() => deleteStudent(s.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      {/* MODAL */}
      {selected && (
        <div className="modal">
          <div className="modal-box">
            <h2>Student Details</h2>
            <p>Name: {selected.name}</p>
            <p>Email: {selected.email}</p>
            <p>Status: {selected.status}</p>
            <p>Score: {selected.score}</p>

            <button onClick={() => setSelected(null)}>Close</button>
          </div>
        </div>
      )}

    </div>
  );
}