const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const jobRoutes = require('./routes/jobRoutes.js');

app.use('/api/jobs', jobRoutes);

// Middleware
app.use(cors());
app.use(express.json());

const MONGODB_URI = 'mongodb+srv://sakshamtiwari:Kkt123@cluster0.y89wby0.mongodb.net/job-manage';

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected to MongoDB Atlas!'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Removed the app.listen() call for Vercel deployment

module.exports = app;
