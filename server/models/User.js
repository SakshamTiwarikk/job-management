const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // Add other fields as needed (name, role, etc.)
});

module.exports = mongoose.model('User', userSchema);
// Mongoose will create a 'users' collection in 'job-manage' DB
