// server/routes/jobRoutes.js
const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

// @route  POST /api/jobs
// @desc   Create a new job
router.post('/', async (req, res) => {
  try {
    const newJob = new Job(req.body); // req.body should include jobTitle, location, jobType, salary, etc.
    const savedJob = await newJob.save();
    return res.status(201).json(savedJob);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// @route  GET /api/jobs
// server/routes/jobRoutes.js
router.get('/', async (req, res) => {
  try {
    const { jobTitle, location, jobType, minSalary, maxSalary } = req.query;
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
    if (minSalary || maxSalary) {
      filter.salary = {};
      if (minSalary) filter.salary.$gte = parseInt(minSalary, 10);
      if (maxSalary) filter.salary.$lte = parseInt(maxSalary, 10);
    }

    console.log("Server filter:", filter); // Debug log

    const jobs = await Job.find(filter);
    return res.status(200).json(jobs);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});


module.exports = router;
