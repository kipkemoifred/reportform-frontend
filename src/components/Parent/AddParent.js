import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddParent.css"; 

function AddParent() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`added parent name ${name}`)

        axios.post("http://localhost:8080/newParent", {
            NAME: name,
            EMAIL: email,
            PASSWORD: password,
        })
        .then(() => {
            navigate("/");
            console.log("added parent")
        })
        .catch((error) => {
            console.error("Error adding parent:", error);
        });
    };

    return (
        <div className="add-parent-container">
            <h1 className="title">Add Parent</h1>
            <form className="add-parent-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter parent's name"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter parent's email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter a password"
                        required
                    />
                </div>
                <button type="submit" className="submit-button">
                    Add Parent
                </button>
            </form>
        </div>
    );
}

export default AddParent;
