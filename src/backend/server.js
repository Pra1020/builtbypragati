const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
const PORT = 5000;
const DB_FILE = './db.json';

app.use(cors({
  origin: 'http://localhost:3000', // React app origin
  credentials: true
}));
app.use(bodyParser.json());

app.use(session({
  secret: 'mySecretKey',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // true if using https
}));

// Helper: Read JSON from file
function readData() {
  const data = fs.readFileSync(DB_FILE);
  return JSON.parse(data);
}

// Helper: Write JSON to file
function writeData(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

// ======================
// 👥 LOGIN / LOGOUT
// ======================

// Login route (for admin access)
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Hardcoded user (you can connect to DB later)
  if (username === 'pragati' && password === 'pragati9902') {
    req.session.isLoggedIn = true;
    res.json({ message: 'Login successful' });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Logout
app.post('/logout', (req, res) => {
  req.session.destroy();
  res.json({ message: 'Logged out' });
});

// Auth check
app.get('/auth', (req, res) => {
  res.json({ isLoggedIn: req.session.isLoggedIn || false });
});

// Middleware for protected routes
function isAuthenticated(req, res, next) {
  if (req.session.isLoggedIn) next();
  else res.status(401).json({ error: 'Not authorized' });
}

// ========================
// ✉️ HIRE ME FORM ROUTES
// ========================

// GET all requests (protected)
app.get('/hireMeRequests', isAuthenticated, (req, res) => {
  const data = readData();
  res.json(data.hireMeRequests || []);
});

// POST new request (open to all)
app.post('/hireMeRequests', (req, res) => {
  const { companyName, personName, email, post, message } = req.body;

  if (!companyName || !personName || !email || !post || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const data = readData();
  const newRequest = {
    id: Date.now(),
    companyName,
    personName,
    email,
    post,
    message
  };

  data.hireMeRequests = data.hireMeRequests || [];
  data.hireMeRequests.push(newRequest);

  writeData(data);
  res.status(201).json({ message: 'Request submitted successfully!', request: newRequest });
});

// DELETE request by ID (protected)
app.delete('/hireMeRequests/:id', isAuthenticated, (req, res) => {
  const { id } = req.params;
  const data = readData();
  const filtered = (data.hireMeRequests || []).filter(req => req.id != id);
  data.hireMeRequests = filtered;
  writeData(data);
  res.json({ message: 'Request deleted successfully' });
});

// ========================
// 🔥 START SERVER
// ========================
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
