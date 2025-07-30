import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';
import Skills from './pages/Skills';
import Admin from './pages/Admin';
import Login from './pages/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check session from server
  useEffect(() => {
    fetch('http://localhost:5000/auth', {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(data => setIsLoggedIn(data.isLoggedIn));
  }, []);

  // Logout handler
  const handleLogout = () => {
    fetch('http://localhost:5000/logout', {
      method: 'POST',
      credentials: 'include'
    }).then(() => setIsLoggedIn(false));
  };

  return (
    <Router>
      <nav className="navbar navbar-expand-lg custom-navbar px-4">
        <Link className="navbar-brand logo" to="/">BuiltBy<span>Pragati</span></Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link custom-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link custom-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link custom-link" to="/projects">Projects</Link></li>
            <li className="nav-item"><Link className="nav-link custom-link" to="/skills">Skills</Link></li>
            <li className="nav-item"><Link className="nav-link custom-link" to="/contact">Contact</Link></li>

            {/* ADMIN NAV ITEM */}
            {isLoggedIn ? (
              <>
                <li className="nav-item"><Link className="nav-link custom-link" to="/admin">OnlyMe</Link></li>
                <li className="nav-item"><button className="btn btn-link nav-link custom-link" onClick={handleLogout}>Logout</button></li>
              </>
            ) : (
              <li className="nav-item"><Link className="nav-link custom-link" to="/login">Login</Link></li>
            )}
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/admin" element={isLoggedIn ? <Admin /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>

      {/* Internal CSS */}
      <style>{`
        .custom-navbar {
          background: linear-gradient(to right, #000000, #444, #ffffff);
          padding: 15px 20px;
        }

        .logo {
          font-weight: bold;
          font-size: 1.7rem;
          color: #fff !important;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .logo span {
          color: #ffd700;
        }

        .nav-link.custom-link {
          color: #000 !important;
          margin-left: 20px;
          font-weight: 700;
          font-size: 1.1rem;
          transition: color 0.3s ease;
        }

        .nav-link.custom-link:hover {
          color: #ffd700 !important;
        }

        .navbar-toggler {
          border: none;
        }

        .navbar-toggler-icon {
          background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='white' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
        }
      `}</style>
    </Router>
  );
}

export default App;
