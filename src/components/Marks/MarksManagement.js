import React, { useState, useEffect } from "react";
import axios from "axios";
import MarksForm from "./MarksForm";
import MarksList from "./MarksList";

const MarksManagement = () => {
  const [marks, setMarks] = useState([]);
  const [selectedMarks, setSelectedMarks] = useState(null);
  const [error, setError] = useState("");

  // Fetch all marks
  const fetchMarks = async () => {
    try {
      const response = await axios.get("http://localhost:8080/getMarks");
      setMarks(response.data);
    } catch (err) {
      setError("Failed to fetch marks");
    }
  };

  // Add or update marks
  const saveMarks = async (mark) => {
    try {
      if (mark.id) {
        // Update
        await axios.put(`http://localhost:8080/marks/${mark.id}`, mark);
      } else {
        // Add
        await axios.post("http://localhost:8080/newMarks", mark);
      }
      fetchMarks();
      setSelectedMarks(null);
    } catch (err) {
      setError("Failed to save marks");
    }
  };

  // Delete marks
  const deleteMarks = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/marks/${id}`);
      fetchMarks();
    } catch (err) {
      setError("Failed to delete marks");
    }
  };

  useEffect(() => {
    fetchMarks();
  }, []);

  return (
    <div className="marks-management-container">
      <h1>Marks Management</h1>
      {error && <div className="error-message">{error}</div>}
      <MarksForm
        marks={selectedMarks}
        onSave={saveMarks}
        onCancel={() => setSelectedMarks(null)}
      />
      <MarksList
        marks={marks}
        onEdit={(mark) => setSelectedMarks(mark)}
        onDelete={deleteMarks}
      />
    </div>
  );
};

export default MarksManagement;
