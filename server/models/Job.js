const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema(
  {
    jobTitle: { type: String, required: true },
    companyName: { type: String, required: true },
    location: { type: String, required: true },
    jobType: {
      type: String,
      enum: ['Full-time', 'Part-time', 'Contract', 'Internship'],
      required: true,
    },
    salaryRange: { type: String, required: true },
    jobDescription: { type: String },
    requirements: { type: String },
    responsibilities: { type: String },
    applicationDeadline: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Job', jobSchema);
// Mongoose automatically creates a 'jobs' collection
// (lowercased and pluralized from 'Job') in the 'job-manage' DB
