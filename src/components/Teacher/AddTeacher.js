import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddTeacher.css"; 

function AddTeacher() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [employee_number, setEmployeeNumber] = useState("");
    const [national_id, setNationalId] = useState("");
    const [home_location, setHomeLocation] = useState("");
    const [phone_number, setPhoneNumber] = useState("");
    const [user_name, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`added parent name ${name}`)

        axios.post("http://localhost:8080/newTeacher", {
            name: name,
            email: email,
            national_id: national_id,
            home_location: home_location,
            subject: subject,
            employee_number: employee_number,
            phone_number: phone_number,
            user_name: user_name,            
            password: password,
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
            <h1 className="title">Register Teacher</h1>
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
                    <label htmlFor="national_id">National Id:</label>
                    <input
                        type="national_id"
                        id="national_id"
                        className="form-control"
                        value={national_id}
                        onChange={(e) => setNationalId(e.target.value)}
                        placeholder="Enter National Id"
                        required
                    />

                </div>
                <div className="form-group">
                    <label htmlFor="home_location">Home Location:</label>
                    <input
                        type="home_location"
                        id="home_location"
                        className="form-control"
                        value={home_location}
                        onChange={(e) => setHomeLocation(e.target.value)}
                        placeholder="Enter Home Location"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phone_number">Phone Number:</label>
                    <input
                        type="phone_number"
                        id="phone_number"
                        className="form-control"
                        value={phone_number}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Enter a phone number"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="subject">Subject:</label>
                    <input
                        type="subject"
                        id="subject"
                        className="form-control"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Enter the subject you teach"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="e">Employee Number:</label>
                    <input
                        type="employee_number"
                        id="employee_number"
                        className="form-control"
                        value={employee_number}
                        onChange={(e) => setEmployeeNumber(e.target.value)}
                        placeholder="Enter employee number"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="user_name">User Name:</label>
                    <input
                        type="user_name"
                        id="user_name"
                        className="form-control"
                        value={user_name}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter a user name"
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
                    Add Teacher
                </button>
            </form>
        </div>
    );
}

export default AddTeacher;
