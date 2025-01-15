import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css"; // Importing CSS for styling

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Parent");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const credentials = {
      USER_NAME: userName,
      PASSWORD: password,
      ROLE: role, // Include the selected role
    };

    axios
      .post("http://localhost:8080/login"+role, credentials)
      .then((response) => {
        localStorage.setItem("authToken", response.data.token);

        //navigate to respective home page student/parent->fees/marks uneditable
        //teacher- can edit students marks
        //accountant can edit student's fees
        navigate("/parent_dashboard");
      })
      .catch((error) => {
        setErrorMessage(
          error.response ? error.response.data.error : "An error occurred"
        );
      });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <img
          src="harvard.png" // Replace with the path to your image
          alt="Login"
          className="login-image"
        />
        <h1>Login</h1>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="role">Role:</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="form-input"
            >
              <option value="Parent">Parent</option>
              <option value="Teacher">Teacher</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="userName">Username:</label>
            <input
              id="userName"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <button type="submit" className="submit-button">Login</button>
        </form>
        <p className="reset-password">
          <a href="/reset-password">Forgot Password?</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
