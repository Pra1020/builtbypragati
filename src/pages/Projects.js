import React from 'react';

function Projects() {
  return (
    <div className="projects-page py-5 px-3">
      <h2 className="text-center mb-4 text-gold">💡 Personal Projects</h2>

      <div className="project-grid">
        <div className="project-card">
          <h5>AI Chatbot using Flask & ML</h5>
          <p>
            Developed a smart chatbot using Flask and machine learning algorithms like Random Forest and Decision Tree. It simulates conversations, 
            learns from user inputs, and responds intelligently. Designed for scalable deployment and basic NLP integration.
          </p>
        </div>

        <div className="project-card">
          <h5>Government Schemes – Madurai Tech Connect</h5>
          <p>
            A social impact project to bridge the digital divide in Madurai, Tamil Nadu. Built a prototype platform to simplify access to government 
            schemes, train social workers, and improve public service delivery through digital awareness and mobile-friendly interfaces.
          </p>
        </div>

        <div className="project-card">
          <h5>Heart Disease Prediction System</h5>
          <p>
            A full-stack project that predicts heart disease using 15+ medical indicators like age, cholesterol, blood pressure, etc. 
            Developed frontend for user input and backend ML integration for real-time predictions. Helps early diagnosis and improved patient care.
          </p>
        </div>

        <div className="project-card">
          <h5>Order Management API (Java + Spring Boot)</h5>
          <p>
            Built RESTful APIs for managing customer orders with features like product inventory, order tracking, and transaction logs. 
            Focused on speed, secure access, and clean architecture using Spring Boot and Java for high-performance enterprise-level systems.
          </p>
        </div>

        <div className="project-card">
          <h5>Apna Cart – E-Commerce Web App</h5>
          <p>
            Created a responsive e-commerce site for vegetable shopping. Includes product listings, cart management, and frontend form validation. 
            Designed with Bootstrap and React for a smooth and accessible user experience. Ideal for local vendors transitioning to online sales.
          </p>
        </div>
      </div>

      {/* Internal CSS */}
      <style>{`
        .projects-page {
          min-height: 100vh;
          background: linear-gradient(to bottom right, #1c1c1c, #555, #f1f1f1);
          color: #fff;
        }

        .text-gold {
          color: #ffd700;
          font-weight: bold;
        }

        .project-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
          padding: 20px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .project-card {
          background-color: rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          padding: 20px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .project-card:hover {
          background-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-5px);
        }

        .project-card h5 {
          color: #ffd700;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .project-card p {
          font-size: 0.95rem;
          color: #e6e6e6;
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
  .custom-footer .footer-links a {
    display: block;
    margin: 5px 0;
  }
}

      `}</style>
    </div>
  );
}

export default Projects;
