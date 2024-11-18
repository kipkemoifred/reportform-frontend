import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const credentials = {
      USER_NAME: userName,
      PASSWORD: password,
    };

    // Make the POST request to the backend
    axios
      .post("http://localhost:8080/loginParent", credentials)
      .then((response) => {
        // Store the JWT token in localStorage or sessionStorage
        localStorage.setItem("authToken", response.data.token);
        // Redirect to the home page or dashboard
        navigate("/");
      })
      .catch((error) => {
        // Handle errors
        setErrorMessage(error.response ? error.response.data.error : "An error occurred");
      });
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit} className="login-form">
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
    </div>
  );
}

export default Login;
