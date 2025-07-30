import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    personName: '',
    email: '',
    post: '',
    message: ''
  });

  const toggleForm = () => setShowForm(!showForm);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/hireMeRequests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        alert('Form submitted successfully!');
        setFormData({
          companyName: '',
          personName: '',
          email: '',
          post: '',
          message: ''
        });
        setShowForm(false);
      } else {
        alert('Error: ' + result.error);
      }
    } catch (error) {
      alert('Server error. Check if backend is running.');
      console.error(error);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="hero text-white text-center d-flex align-items-center">
        <div className="container">
          {/* Header + Hire Me */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="display-4 fw-bold">Hi, I’m <span className="highlight">Pragati</span></h1>
            <button className="btn btn-warning fw-bold" onClick={toggleForm}>
              {showForm ? 'Close' : 'Hire Me'}
            </button>
          </div>
          <p className="lead mb-5">Full Stack Developer & AI Engineer</p>

          {/* Hire Me Form */}
          {showForm && (
            <div className="form-box p-4 mb-5 text-start">
              <h4 className="text-light mb-3">📝 Hire Me Form</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label text-light">Company Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter company name"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label text-light">Person Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    value={formData.personName}
                    onChange={(e) => setFormData({ ...formData, personName: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label text-light">Contact Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label text-light">Post</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. HR Manager"
                    value={formData.post}
                    onChange={(e) => setFormData({ ...formData, post: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label text-light">Message</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Write your message..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-light">Submit</button>
              </form>
            </div>
          )}

          {/* Main Cards */}
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card-box p-4 h-100">
                <h2 className="section-title">🚀 Who Am I?</h2>
                <p>
                  Passionate about building clean, scalable, and user-focused digital solutions.
                  From frontend finesse to backend brains, I bridge design and logic.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card-box p-4 h-100">
                <h2 className="section-title">🛠 Tech Stack</h2>
                <p>
                  <strong>Frontend:</strong> React.js, Bootstrap, Tailwind<br />
                  <strong>Backend:</strong> Spring Boot, Express, JWT<br />
                  <strong>AI Tools:</strong> Python, TensorFlow, GenAI, NLP<br />
                  <strong>Tools:</strong> GitHub, Postman, MySQL
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card-box p-4 h-100">
                <h2 className="section-title">💡 Projects</h2>
                <p>
                  AI Chatbot, Heart Disease ML Model, Order Management API,
                  Government Scheme Tech Platform, ApnaCart E-commerce App, Dashboards
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card-box p-4 h-100">
                <h2 className="section-title">📫 Let’s Connect</h2>
                <p>
                  <a href="mailto:pragatimetre@gmail.com">pragatimetre@gmail.com</a><br />
                  <a href="https://linkedin.com/in/pragati-metre-918353296" target="_blank" rel="noreferrer">LinkedIn</a> |
                  <a href="https://github.com/Pra1020" target="_blank" rel="noreferrer"> GitHub</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="custom-footer text-center py-4 w-100">
        <p className="mb-1">© 2025 <strong>BuiltByPragati</strong>. All rights reserved.</p>
        <p className="mb-2">🌟 This website is proudly designed and developed by me — <strong>Pragati Metre</strong>.</p>
        <div className="footer-links">
          <a href="https://linkedin.com/in/pragati-metre-918353296" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/Pra1020" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:pragatimetre@gmail.com">Email</a>
        </div>
      </footer>

      {/* Internal CSS */}
      <style>{`
        .hero {
          min-height: 100vh;
          background: linear-gradient(135deg, #000000, #3a3a3a, #ffffff);
          padding: 60px 20px;
        }

        .highlight {
          color: #ffd700;
        }

        .card-box {
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          transition: transform 0.3s, box-shadow 0.3s;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .card-box:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
          background-color: rgba(255, 255, 255, 0.15);
        }

        .section-title {
          font-size: 1.5rem;
          margin-bottom: 0.75rem;
          color: #ffd700;
        }

        .card-box p, a {
          color: #ffffffd9;
          font-size: 1rem;
          line-height: 1.6;
        }

        a {
          text-decoration: none;
          margin: 0 5px;
        }

        a:hover {
          text-decoration: underline;
          color: #fff;
        }

        .form-box {
          background-color: rgba(0, 0, 0, 0.4);
          border-radius: 12px;
        }

        input, textarea {
          background-color: #f1f1f1;
        }

        .custom-footer {
          background: linear-gradient(to right, #000000, #2c2c2c, #ffffff);
          color: #f1f1f1;
        }

        .custom-footer .footer-links a {
          margin: 0 10px;
          color: #ffd700;
          text-decoration: none;
          font-weight: 500;
        }

        .custom-footer .footer-links a:hover {
          text-decoration: underline;
          color: #ffffff;
        }

        @media (max-width: 576px) {
          .display-4 {
            font-size: 2rem;
          }
          .custom-footer .footer-links a {
            display: block;
            margin: 5px 0;
          }
        }
      `}</style>
    </>
  );
}

export default Home;
