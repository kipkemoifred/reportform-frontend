import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Teacher.css";

function TeacherManagement() {
  const [teachers, setTeachers] = useState([]);
  const [newTeacher, setNewTeacher] = useState({
    name: "",
    national_id: "",
    home_location: "",
    phone_number: "",
    email: "",
    subject: "",
    employee_number: "",
    user_name: "",
    password: "",
  });
  const [editingTeacher, setEditingTeacher] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = () => {
    axios
      .get("http://localhost:8080/getTeachers")
      .then((response) => setTeachers(response.data))
      .catch(() => setError("Error fetching teachers"));
  };

  const handleAddTeacher = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/newTeacher", newTeacher)
      .then(() => {
        fetchTeachers();
        setNewTeacher({
          name: "",
          national_id: "",
          home_location: "",
          phone_number: "",
          email: "",
          subject: "",
          employee_number: "",
          user_name: "",
          password: "",
        });
      })
      .catch(() => setError("Error adding teacher"));
  };

  const handleUpdateTeacher = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8080/teacher/${editingTeacher.ID}`, editingTeacher)
      .then(() => {
        fetchTeachers();
        setEditingTeacher(null);
      })
      .catch(() => setError("Error updating teacher"));
  };

  const handleDeleteTeacher = (id) => {
    axios
      .delete(`http://localhost:8080/teacher/${id}`)
      .then(() => fetchTeachers())
      .catch(() => setError("Error deleting teacher"));
  };

  return (
    <div className="teacher-management-container">
      <h1>Teacher Management</h1>
      {error && <p className="error-message">{error}</p>}

      <div className="form-container">
        <h2>{editingTeacher ? "Edit Teacher" : "Add New Teacher"}</h2>
        <form onSubmit={editingTeacher ? handleUpdateTeacher : handleAddTeacher}>
          {["name", "national_id", "home_location", "phone_number", "email", "subject", "employee_number", "user_name"].map((field) => (
            <div className="form-group" key={field}>
              <label htmlFor={field}>{field.replace("_", " ").toUpperCase()}:</label>
              <input
                id={field}
                type={field === "email" ? "email" : "text"}
                value={editingTeacher ? editingTeacher[field.toUpperCase()] : newTeacher[field.toUpperCase()]}
                onChange={(e) =>
                  editingTeacher
                    ? setEditingTeacher({ ...editingTeacher, [field.toUpperCase()]: e.target.value })
                    : setNewTeacher({ ...newTeacher, [field.toUpperCase()]: e.target.value })
                }
                required
              />
            </div>
          ))}
          {!editingTeacher && (
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                type="password"
                value={newTeacher.password}
                onChange={(e) => setNewTeacher({ ...newTeacher, password: e.target.value })}
                required
              />
            </div>
          )}
          <button type="submit" className="form-button">
            {editingTeacher ? "Update Teacher" : "Add Teacher"}
          </button>
          {editingTeacher && (
            <button
              type="button"
              className="cancel-button"
              onClick={() => setEditingTeacher(null)}
            >
              Cancel
            </button>
          )}
        </form>
      </div>

      <div className="teachers-list">
        <h2>Teachers List</h2>
        {teachers.length === 0 ? (
          <p>No teachers available.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>National ID</th>
                <th>Home Location</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Subject</th>
                <th>Employee Number</th>
                <th>User Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((teacher) => (
                <tr key={teacher.ID}>
                  <td>{teacher.ID}</td>
                  <td>{teacher.name}</td>
                  <td>{teacher.national_id}</td>
                  <td>{teacher.home_location}</td>
                  <td>{teacher.phone_number}</td>
                  <td>{teacher.email}</td>
                  <td>{teacher.subject}</td>
                  <td>{teacher.employee_number}</td>
                  <td>{teacher.user_name}</td>
                  <td>
                    <button
                      className="edit-button"
                      onClick={() => setEditingTeacher(teacher)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-button"
                      onClick={() => handleDeleteTeacher(teacher.ID)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default TeacherManagement;
