import React, { useState, useEffect } from "react";
import axios from "axios";
import './ParentManagement.css';

function ParentManagement() {
  const [parents, setParents] = useState([]);
  const [newParent, setNewParent] = useState({
    name: "",
    national_id: "",
    home_location: "",
    phone_number: "",
    email: "",
    user_name: "",
    password: "",
  });

  const [editParent, setEditParent] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchParents();
  }, []);

  const fetchParents = async () => {
    try {
      const response = await axios.get("http://localhost:8080/getParents");
      setParents(response.data);
    } catch (error) {
      setErrorMessage("Failed to fetch parents.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (editParent) {
      setEditParent({ ...editParent, [name]: value });
    } else {
      setNewParent({ ...newParent, [name]: value });
    }
  };

  const handleSubmitNewParent = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/newParent", newParent);
      fetchParents();
      setNewParent({
        name: "",
        national_id: "",
        home_location: "",
        phone_number: "",
        email: "",
        user_name: "",
        password: "",
      });
    } catch (error) {
      setErrorMessage("Error adding parent.");
    }
  };

  const handleUpdateParent = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/parent/${editParent.id}`, editParent);
      fetchParents();
      setEditParent(null);
    } catch (error) {
      setErrorMessage("Error updating parent.");
    }
  };

  const handleDeleteParent = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/parent/${id}`);
      fetchParents();
    } catch (error) {
      setErrorMessage("Error deleting parent.");
    }
  };

  return (
    <div className="container">
      <h1>Parent Management</h1>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <div className="form-section">
        <h2>{editParent ? "Update Parent" : "Add New Parent"}</h2>
        <form onSubmit={editParent ? handleUpdateParent : handleSubmitNewParent}>
          <input
            type="text"
            name="name"
            value={editParent ? editParent.name : newParent.name}
            placeholder="Name"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="national_id"
            value={editParent ? editParent.national_id : newParent.national_id}
            placeholder="National ID"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="home_location"
            value={editParent ? editParent.home_location : newParent.home_location}
            placeholder="Home Location"
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone_number"
            value={editParent ? editParent.phone_number : newParent.phone_number}
            placeholder="Phone Number"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            value={editParent ? editParent.email : newParent.email}
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="user_name"
            value={editParent ? editParent.user_name : newParent.user_name}
            placeholder="Username"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={editParent ? editParent.password : newParent.password}
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <button type="submit">{editParent ? "Update Parent" : "Add Parent"}</button>
        </form>
      </div>
      <div className="parent-list">
        <h2>Parents List</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>National ID</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {parents.map((parent) => (
              <tr key={parent.id}>
                <td>{parent.name}</td>
                <td>{parent.national_id}</td>
                <td>{parent.email}</td>
                <td>{parent.phone_number}</td>
                <td>
                  <button onClick={() => setEditParent(parent)}>Edit</button>
                  <button onClick={() => handleDeleteParent(parent.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ParentManagement;
