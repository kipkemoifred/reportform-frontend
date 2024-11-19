import React, { useState, useEffect } from "react";

const MarksForm = ({ marks, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    admission_number: "",
    maths: "",
    english: "",
    composition: "",
    kiswahili: "",
    insha: "",
    science: "",
    social_studies: "",
    cre: "",
    total: "",
    term: "",
    exam: "",
  });

  useEffect(() => {
    if (marks) {
      setFormData(marks);
    } else {
      setFormData({
        admission_number: "",
        maths: "",
        english: "",
        composition: "",
        kiswahili: "",
        insha: "",
        science: "",
        social_studies: "",
        cre: "",
        total: "",
        term: "",
        exam: "",
      });
    }
  }, [marks]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="form-container">
      <h2>{marks ? "Edit Marks" : "Add Marks"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Admission Number:</label>
          <input
            type="text"
            name="admission_number"
            value={formData.admission_number}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Maths:</label>
          <input
            type="number"
            name="maths"
            value={formData.maths}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>English:</label>
          <input
            type="number"
            name="english"
            value={formData.english}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Composition:</label>
          <input
            type="number"
            name="composition"
            value={formData.composition}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Kiswahili:</label>
          <input
            type="number"
            name="kiswahili"
            value={formData.kiswahili}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Insha:</label>
          <input
            type="number"
            name="insha"
            value={formData.insha}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Science:</label>
          <input
            type="number"
            name="science"
            value={formData.science}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Social Studies:</label>
          <input
            type="number"
            name="social_studies"
            value={formData.social_studies}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>CRE:</label>
          <input
            type="number"
            name="cre"
            value={formData.cre}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Total:</label>
          <input
            type="number"
            name="total"
            value={formData.total}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Term:</label>
          <input
            type="text"
            name="term"
            value={formData.term}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Exam:</label>
          <input
            type="text"
            name="exam"
            value={formData.exam}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="form-button">
          {marks ? "Update" : "Add"}
        </button>
        <button type="button" className="cancel-button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default MarksForm;
