import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Student.css"; // Ensure the CSS file is in the same directory.

function StudentManagement() {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({
    name: "",
    admission_number: "",
    home_location: "",
    phone_number: "",
    user_name: "",
    role: "",
    password: "",
  });
  const [editingStudent, setEditingStudent] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    axios
      .get("http://localhost:8080/getStudents")
      .then((response) => setStudents(response.data))
      .catch(() => setError("Error fetching students"));
  };

  const handleAddStudent = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/newStudent", newStudent)
      .then(() => {
        fetchStudents();
        setNewStudent({
          name: "",
          admission_number: "",
          home_location: "",
          phone_number: "",
          user_name: "",
          role: "",
          password: "",
        });
      })
      .catch(() => setError("Error adding student"));
  };

  const handleUpdateStudent = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8080/student/${editingStudent.ID}`, editingStudent)
      .then(() => {
        fetchStudents();
        setEditingStudent(null);
      })
      .catch(() => setError("Error updating student"));
  };

  const handleDeleteStudent = (id) => {
    axios
      .delete(`http://localhost:8080/student/${id}`)
      .then(() => fetchStudents())
      .catch(() => setError("Error deleting student"));
  };

  return (
    <div className="student-management-container">
      <h1>Student Management</h1>
      {error && <p className="error-message">{error}</p>}

      <div className="form-container">
        <h2>{editingStudent ? "Edit Student" : "Add New Student"}</h2>
        <form onSubmit={editingStudent ? handleUpdateStudent : handleAddStudent}>
          {["name", "admission_number", "home_location", "phone_number", "user_name", "role"].map((field) => (
            <div className="form-group" key={field}>
              <label htmlFor={field}>{field.replace("_", " ").toUpperCase()}:</label>
              <input
                id={field}
                type="text"
                value={
                  editingStudent
                    ? editingStudent[field.toUpperCase()]
                    : newStudent[field.toUpperCase()]
                }
                onChange={(e) =>
                  editingStudent
                    ? setEditingStudent({
                        ...editingStudent,
                        [field.toUpperCase()]: e.target.value,
                      })
                    : setNewStudent({
                        ...newStudent,
                        [field.toUpperCase()]: e.target.value,
                      })
                }
                required
              />
            </div>
          ))}
          {!editingStudent && (
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                type="password"
                value={newStudent.password}
                onChange={(e) =>
                  setNewStudent({ ...newStudent, password: e.target.value })
                }
                required
              />
            </div>
          )}
          <button type="submit" className="form-button">
            {editingStudent ? "Update Student" : "Add Student"}
          </button>
          {editingStudent && (
            <button
              type="button"
              className="cancel-button"
              onClick={() => setEditingStudent(null)}
            >
              Cancel
            </button>
          )}
        </form>
      </div>

      <div className="students-list">
        <h2>Students List</h2>
        {students.length === 0 ? (
          <p>No students available.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Admission Number</th>
                <th>Home Location</th>
                <th>Phone Number</th>
                <th>User Name</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.ID}>
                  <td>{student.ID}</td>
                  <td>{student.name}</td>
                  <td>{student.admission_number}</td>
                  <td>{student.home_location}</td>
                  <td>{student.phone_number}</td>
                  <td>{student.user_name}</td>
                  <td>{student.role}</td>
                  <td>
                    <button
                      className="edit-button"
                      onClick={() => setEditingStudent(student)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-button"
                      onClick={() => handleDeleteStudent(student.ID)}
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

export default StudentManagement;
