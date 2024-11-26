import React from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css"; // Importing CSS for styling

const roles = [
  { title: "Parent", image: "/path/to/parent-image.jpg", link: "/add_parent" },
  { title: "Teacher", image: "/path/to/teacher-image.jpg", link: "/add_teacher" },
  { title: "Student", image: "/path/to/student-image.jpg", link: "/add_student" },
  { title: "Accountant", image: "/path/to/accountant-image.jpg", link: "/add_accountant" },
];

function Register() {
  const navigate = useNavigate();

  return (
    <div className="grid-container">
      <h1 className="grid-title">Register As</h1>
      <div className="grid">
        {roles.map((role, index) => (
          <div
            key={index}
            className="grid-card"
            onClick={() => navigate(role.link)}
          >
            <img src={role.image} alt={role.title} className="grid-card-image" />
            <h2 className="grid-card-title">{role.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Register;
