
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Parents from "./components/Parent/Parents";
// import AddParent from "./components/Parent/AddParent";
import EditParent from "./components/Parent/EditParent";
import Login from "./components/Auth/Login";
import StudentManagement from "./components/Student/StudentManagement"
import TeacherManagement from './components/Teacher/TeacherManagement';
import AccountantManagement from './components/Accountant/AccountantManagement';
import MarksManagement from './components/Marks/MarksManagement';
import FeesManagement from './components/Fees/FeesManagement';
import ParentManagement from './components/Parent/ParentManagement';
import ResetPassword from './components/reset_password/ResetPassword';

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
                      
                        </li>
                      
                      
                    </ul>
                </nav>
            </header>
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Parents />} />
                    <Route path="/parent" element={<ParentManagement />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/edit/:id" element={<EditParent />} />
                    <Route path="/student" element={<StudentManagement />} />
                    <Route path="/teacher" element={<TeacherManagement />} />
                    <Route path="/accountant" element={<AccountantManagement />} />
                    <Route path="/marks" element={<MarksManagement />} />
                    <Route path="/fees" element={<FeesManagement />} />
                    <Route path="/reset_password" element={<ResetPassword />} />
                </Routes>
            </main>
        </div>
    </Router>
);
}

export default App;
