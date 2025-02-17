const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const jobRoutes = require('./routes/jobRoutes.js');

app.use('/api/jobs', jobRoutes);

// Middleware
app.use(cors());
app.use(express.json());

// Replace <password> and <dbname> with your actual credentials if needed.
// Or directly use your provided connection string with the job-manage DB appended.
const MONGODB_URI = 'mongodb+srv://sakshamtiwari:Kkt123@cluster0.y89wby0.mongodb.net/job-manage';

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    // useCreateIndex, useFindAndModify, etc. are no longer needed in Mongoose 6+
  })
  .then(() => console.log('Connected to MongoDB Atlas!'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
