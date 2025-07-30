import React from 'react';

function About() {
  return (
    <div className="about-page">
      <div className="container py-5 text-white">
        <h2 className="text-center mb-5">👩‍💻 About Me</h2>

        <div className="section mb-5">
          <h4>🌱 My Journey</h4>
          <p>
            I’m Pragati — a passionate self-taught web developer and tech enthusiast. 
            My journey began with HTML & CSS, and I soon fell in love with front-end development. 
            Over time, I explored full-stack development, machine learning, and building real-world apps.
          </p>
        </div>

        <div className="section mb-5">
          <h4>💖 My Passion</h4>
          <p>
            I enjoy transforming ideas into digital products that can impact people’s lives. 
            Whether it’s building a chatbot or a public-service app, I put my heart into creating clean, functional code.
          </p>
        </div>

        <div className="section mb-5">
          <h4>🎯 Currently Working On</h4>
          <p>
            Right now, I’m working on <strong>BuiltByPragati</strong>, freelancing, and exploring Generative AI and advanced React patterns. 
            I'm committed to continuous learning and applying new tech in practical projects.
          </p>
        </div>

        <div className="section mb-5">
          <h4>🎨 Hobbies & Interests</h4>
          <ul className="list-unstyled">
            <li>🎬 Video editing & creative content making</li>
            <li>📸 Exploring tech tools & design</li>
            <li>📚 Learning new tech trends & AI tools</li>
            <li>🎧 Music & calming solo time</li>
            <li>📝 Writing and designing layouts</li>
          </ul>
        </div>

        <div className="section">
          <h4>🌍 Languages Known</h4>
          <p>
            Hindi, English, Marathi, Kannada.
          </p>
        </div>
      </div>

      {/* Internal CSS */}
      <style>{`
        .about-page {
          min-height: 100vh;
          background: linear-gradient(to right, #000000, #2d2d2d, #ffffff);
          padding-top: 40px;
          padding-bottom: 40px;
        }

        .section h4 {
          color: #ffd700;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .section p, .section li {
          font-size: 1rem;
          line-height: 1.7;
          color: #eaeaea;
        }

        .list-unstyled li {
          margin-bottom: 8px;
        }

        .text-center {
          font-weight: bold;
          color: #fff;
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

export default About;

