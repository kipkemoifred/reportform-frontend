import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddStudent.css"; 

function AddStudent() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [admission_number, setAdmissionNumber] = useState("");
    const [home_location, setHomeLocation] = useState("");
    const [user_name, setUsername] = useState("");
    const [phone_number, setPhoneNumber] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`added parent name ${name}`)

        axios.post("http://localhost:8080/newStudent", {
            name: name,
            email: email,
            admission_number: admission_number,
            home_location: home_location,
            phone_number: phone_number,
            user_name: user_name,
            password: password,
        })
        .then(() => {
            navigate("/");
            console.log("added student")
        })
        .catch((error) => {
            console.error("Error adding student:", error);
        });
    };

    return (
        <div className="add-parent-container">
            <h1 className="title">Register Student</h1>
            <form className="add-parent-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter Student's name"
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
                        placeholder="Enter Student's email"
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
                    <label htmlFor="admission_number">Admission Number:</label>
                    <input
                        type="admission_number"
                        id="admission_number"
                        className="form-control"
                        value={admission_number}
                        onChange={(e) => setAdmissionNumber(e.target.value)}
                        placeholder="Enter Admission Number"
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
                    Add Parent
                </button>
            </form>
        </div>
    );
}

export default AddStudent;
