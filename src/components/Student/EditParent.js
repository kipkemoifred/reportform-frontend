import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./EditParent.css";

function EditParent() {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:8080/parent/${id}`)
            .then((response) => {
                setName(response.data.name);
                setEmail(response.data.email);
            })
            .catch((error) => {
                console.error("Error fetching parent:", error);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:8080/parent/${id}`, {
                NAME: name,
                EMAIL: email,
            })
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                console.error("Error updating parent:", error);
            });
    };

    return (
        <div className="edit-parent-container">
            <h1 className="title">Edit Parent</h1>
            <form onSubmit={handleSubmit} className="edit-parent-form">
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-input"
                    />
                </div>
                <button type="submit" className="submit-button">
                    Update Parent
                </button>
            </form>
        </div>
    );
}

export default EditParent;
