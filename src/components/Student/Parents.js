import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Parents.css";

function Parents() {
    const [parents, setParents] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/getParents")
            .then((response) => {
                console.log(response.data);
                setParents(response.data);
            })
            .catch((error) => {
                console.error("Error fetching parents:", error);
            });
    }, []);

    const deleteParent = (id) => {
        axios
            .delete(`http://localhost:8080/parent/${id}`)
            .then(() => {
                setParents(parents.filter((parent) => parent.ID !== id));
            })
            .catch((error) => {
                console.error("Error deleting parent:", error);
            });
    };

    return (
        <div className="parents-container">
            <h1 className="title">Parents</h1>
            <table className="parents-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {parents.map((parent) => (
                        <tr key={parent.ID}>
                            <td>{parent.ID}</td>
                            <td>{parent.name}</td>
                            <td>{parent.email}</td>
                            <td>
                                <Link to={`/edit/${parent.ID}`} className="edit-link">
                                    Edit
                                </Link>{" "}
                                |{" "}
                                <button
                                    className="delete-button"
                                    onClick={() => deleteParent(parent.ID)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Parents;
