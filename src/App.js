
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Parents from "./components/Parent/Parents";
import AddParent from "./components/Parent/AddParent";
import EditParent from "./components/Parent/EditParent";
import Login from "./components/Auth/Login";

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
                            <Link to="/add" className="nav-link">
                                Add Parent
                            </Link>
                      
                        </li>

                        <li>
                            <Link to="/login" className="nav-link">
                                Login
                            </Link>
                      
                        </li>

                      
                    </ul>
                </nav>
            </header>
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Parents />} />
                    <Route path="/add" element={<AddParent />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/edit/:id" element={<EditParent />} />
                </Routes>
            </main>
        </div>
    </Router>
);
}

export default App;
