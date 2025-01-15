
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import Parents from "./components/Parent/Parents";
import AddParent from "./components/Parent/AddParent";
import AddStudent from "./components/Student/AddStudent";
import Login from "./components/Auth/Login";

import Home from './components/Home';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Register from './components/Auth/Register';
import AddAccountant from './components/Accountant/AddAccountant';
import AddTeacher from './components/Teacher/AddTeacher';
import ParentDashboard from './components/dashboards/ParentDashboard';

function App() {
  return (
    <Router>
        <div className="app-container">
            <header>
                <nav className="navbar">
                    <ul className="nav-links">
                        <li>
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link to="/about_us" className="nav-link">
                                 About Us
                            </Link>
                      
                        </li>


                        <li>
                            <Link to="/contact_us" className="nav-link">
                                 Contact Us
                            </Link>
                      
                        </li>


                        <li>
                            <Link to="/register" className="nav-link">
                                 Register
                            </Link>
                      
                        </li>


                        <li>
                            <Link to="/login" className="nav-link">
                                 Login
                            </Link>
                      
                        </li>

{/*                         
                        <li>
                            <Link to="/parent" className="nav-link">
                                 Parent
                            </Link>
                      
                        </li>

                        <li>
                            <Link to="/login" className="nav-link">
                                Login
                            </Link>
                      
                        </li>


                        <li>
                            <Link to="/student" className="nav-link">
                            Student
                            </Link>
                      
                        </li>

                        <li>
                            <Link to="/teacher" className="nav-link">
                            Teacher
                            </Link>
                      
                        </li>
                        <li>
                            <Link to="/accountant" className="nav-link">
                            Accountant
                            </Link>
                      
                        </li>
                        <li>
                            <Link to="/marks" className="nav-link">
                            Marks
                            </Link>
                      
                        </li>
                        <li>
                            <Link to="/fees" className="nav-link">
                            Fees
                            </Link>
                      
                        </li>
                        <li>
                            <Link to="/reset_password" className="nav-link">
                            Reset Password
                            </Link>
                      
                        </li> */}
                      
                      
                    </ul>
                </nav>
            </header>
            <main className="main-content">
                <Routes>
                    {/* <Route path="/" element={<Parents />} /> */}
                    <Route path="/" element={<Home />} />
                    <Route path="/about_us" element={<AboutUs />} />
                    <Route path="/contact_us" element={<ContactUs />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/parent_dashboard" element={<ParentDashboard />} />


                  <Route path="/add_parent" element={<AddParent />} />
                  <Route path="/add_student" element={<AddStudent />} />
                  <Route path="/add_teacher" element={<AddTeacher />} />
                  <Route path="/add_accountant" element={<AddAccountant />} />
                    {/* 
                    <Route path="/login" element={<Login />} />
                    <Route path="/edit/:id" element={<EditParent />} />
                    <Route path="/student" element={<StudentManagement />} />
                    <Route path="/teacher" element={<TeacherManagement />} />
                    <Route path="/accountant" element={<AccountantManagement />} />
                    <Route path="/marks" element={<MarksManagement />} />
                    <Route path="/fees" element={<FeesManagement />} />
                    <Route path="/reset_password" element={<ResetPassword />} /> */}
                </Routes>
            </main>
        </div>
    </Router>
);
}

export default App;
