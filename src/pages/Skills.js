import React from 'react';

function Skills() {
  return (
    <div className="skills-page">
      <div className="container py-5">
        <h2 className="text-center mb-5 text-white">💼 My Skills</h2>

        <div className="row">
          {/* Card 1 */}
          <div className="col-md-6 mb-4">
            <div className="card skill-card h-100">
              <div className="card-body">
                <h5 className="card-title">🌐 Languages & Frontend</h5>
                <p className="card-text">
                  <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b><br />
                  <b>React.js</b>, <b>Next.js</b>, <b>Expo</b><br />
                  <b>Bootstrap</b>, <b>Tailwind CSS</b>, <b>NPM</b>
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-6 mb-4">
            <div className="card skill-card h-100">
              <div className="card-body">
                <h5 className="card-title">🧠 Python, ML & DL</h5>
                <p className="card-text">
                  <b>Python</b>, <b>Flask</b>, <b>Pandas</b>, <b>NumPy</b><br />
                  <b>Matplotlib</b>, <b>scikit-learn</b>, <b>TensorFlow</b><br />
                  <b>Random Forest</b>, <b>Regression</b>, <b>CNN</b>, <b>RNN</b>, <b>NLP</b>, <b>GenAI</b>
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-6 mb-4">
            <div className="card skill-card h-100">
              <div className="card-body">
                <h5 className="card-title">🖥️ Backend & Database</h5>
                <p className="card-text">
                  <b>Express.js</b>, <b>MySQL</b><br />
                  <b>Postman</b>, <b>API Integration</b>
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-6 mb-4">
            <div className="card skill-card h-100">
              <div className="card-body">
                <h5 className="card-title">🛠️ Tools & Extras</h5>
                <p className="card-text">
                  <b>VS Code</b>, <b>IntelliJ</b>, <b>PyCharm</b>, <b>Jupyter</b>, <b>Colab</b><br />
                  <b>GitHub</b>, <b>Vercel</b>, <b>Jira</b>, <b>Eclipse</b><br />
                  <b>Excel</b>, <b>Copy-Paste</b>, <b>Data Entry</b>, <b>🎬 Video Editing</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS */}
      <style>{`
        .skills-page {
          min-height: 100vh;
          background: linear-gradient(to right, #000000, #2c2c2c, #ffffff);
          padding-top: 40px;
          padding-bottom: 40px;
        }

        .card.skill-card {
          background-color: #ffffff;
          color: #333;
          border-radius: 12px;
          border: none;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card.skill-card:hover {
          transform: scale(1.02);
          box-shadow: 0 6px 18px rgba(255, 215, 0, 0.3);
        }

        .card-title {
          font-weight: bold;
          font-size: 1.2rem;
          margin-bottom: 15px;
        }

        .card-text b {
          color: #8e2de2;
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

export default Skills;
