// server/routes/jobRoutes.js
const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

// @route  POST /api/jobs
// @desc   Create a new job
router.post('/', async (req, res) => {
  try {
    const newJob = new Job(req.body);
    const savedJob = await newJob.save();
    return res.status(201).json(savedJob);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// @route  GET /api/jobs
// @desc   Get all jobs (with optional filters)
router.get('/', async (req, res) => {
  try {
    const { jobTitle, location, jobType, minSalary, maxSalary } = req.query;

    // Build a filter object
    let filter = {};

    if (jobTitle) {
      filter.jobTitle = { $regex: jobTitle, $options: 'i' };
    }

    if (location) {
      filter.location = { $regex: location, $options: 'i' };
    }

    if (jobType) {
      filter.jobType = jobType;
    }

    // If you want to store salary as a numeric range, you'd handle differently
    // For demonstration, we assume it's a string "50k - 80k"
    // so numeric filters might not directly apply unless we parse them.
    // This example just shows how you might approach numeric filtering
    // if salaryRange was stored as min and max numeric fields.
    if (minSalary && maxSalary) {
      // Example if you had numeric fields: 
      // filter.minSalary = { $gte: parseInt(minSalary) };
      // filter.maxSalary = { $lte: parseInt(maxSalary) };
    }

    const jobs = await Job.find(filter);
    return res.status(200).json(jobs);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
