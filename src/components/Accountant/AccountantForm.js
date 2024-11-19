import React, { useState, useEffect } from "react";

const AccountantForm = ({ accountant, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    national_id: "",
    employee_number: "",
    home_location: "",
    email: "",
    phone_number: "",
    user_name: "",
    password: "",
  });

  useEffect(() => {
    if (accountant) {
      setFormData(accountant);
    } else {
      setFormData({
        name: "",
        national_id: "",
        employee_number: "",
        home_location: "",
        email: "",
        phone_number: "",
        user_name: "",
        password: "",
      });
    }
  }, [accountant]);

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
      <h2>{accountant ? "Edit Accountant" : "Add Accountant"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>National ID:</label>
          <input
            type="text"
            name="national_id"
            value={formData.national_id}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Employee Number:</label>
          <input
            type="text"
            name="employee_number"
            value={formData.employee_number}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Home Location:</label>
          <input
            type="text"
            name="home_location"
            value={formData.home_location}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="text"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="form-button">
          {accountant ? "Update" : "Add"}
        </button>
        <button type="button" className="cancel-button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AccountantForm;
