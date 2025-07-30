import React from 'react';

function Contact() {
  return (
    <div className="contact-page d-flex align-items-center justify-content-center">
      <div className="contact-card text-center p-4">
        <h2 className="mb-3">📫 Contact Me</h2>
        <p className="mb-2">Feel free to reach out for collaborations or questions.</p>

        <div className="contact-info">
          <p><strong>Email:</strong> <a href="mailto:pragatimetre@gmail.com">pragatimetre@gmail.com</a></p>
          <p>
            <strong>LinkedIn:</strong>{' '}
            <a href="https://www.linkedin.com/in/pragati-metre-918353296" target="_blank" rel="noreferrer">
              linkedin.com/in/pragati-metre
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{' '}
            <a href="https://github.com/Pra1020" target="_blank" rel="noreferrer">
              github.com/Pra1020
            </a>
          </p>
        </div>
      </div>

      {/* Internal CSS */}
      <style>{`
        .contact-page {
          min-height: 100vh;
          background: linear-gradient(to bottom right, #1f1f1f, #4a4a4a, #f5f5f5);
          padding: 40px 20px;
        }

        .contact-card {
          background-color: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(6px);
          border-radius: 12px;
          color: #fff;
          max-width: 600px;
          width: 100%;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }

        .contact-card h2 {
          color: #ffd700;
          font-weight: bold;
        }

        .contact-card a {
          color: #ffd700;
          text-decoration: none;
        }

        .contact-card a:hover {
          text-decoration: underline;
        }

        .contact-info p {
          margin-bottom: 0.8rem;
          font-size: 1rem;
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

export default Contact;
