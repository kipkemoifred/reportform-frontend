import React, { useState } from "react";
import axios from "axios";
import './ResetPassword.css';

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/resetPassword", { email });
      setMessage(response.data.message);
      setError(""); // Clear any previous errors
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred while resetting the password.");
      setMessage(""); // Clear any previous success messages
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="container">
      <h1>Password Reset</h1>
      <div className="form-section">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleChange}
            required
          />
          <button type="submit">Reset Password</button>
        </form>
      </div>
      {message && <div className="success-message">{message}</div>}
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default ResetPassword;
