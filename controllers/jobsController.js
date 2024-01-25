const Job = require("../models/jobsModel");
const mongoose = require("mongoose");

// add job
const addJob = async (req, res) => {
  try {
    const job = await Job.create(req.body);

    res.status(200).json(job);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get all jobs
const getAlljobs = async (req, res) => {
  const jobs = await Job.find({});

  res.status(200).json(jobs);
};

// get jobs by user email
const getUserJob = async (req, res) => {
  const { email } = req.params;
  try {
    const userJobs = await Job.find({ email: email });

    res.status(200).json(userJobs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete job
const deleteJob = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Job" });
  }

  const job = await Job.findOneAndDelete({ _id: id });

  if (!job) {
    return res.status(400).json({ error: "No such Job" });
  }

  res.status(200).json(job);
};

// update job
const updateJob = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Job" });
  }

  const job = await Job.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!job) {
    return res.status(400).json({ error: "No such Job" });
  }

  res.status(200).json(job);
};

module.exports = {
  addJob,
  getAlljobs,
  getUserJob,
  updateJob,
  deleteJob,
};
