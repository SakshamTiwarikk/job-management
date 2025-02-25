const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const jobRoutes = require('./routes/jobRoutes.js');

app.use('/api/jobs', jobRoutes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client', 'build')));

// If no other routes match, send the React index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// Middleware
app.use(cors());
app.use(express.json());

// Use the environment variable if available, otherwise use the fallback connection string
const MONGODB_URI =
  process.env.MONGODB_URI ||
  'mongodb+srv://sakshamtiwari:Kkt123@cluster0.y89wby0.mongodb.net/job-manage';

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB Atlas!'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Removed the app.listen() call for Vercel deployment

module.exports = app;
