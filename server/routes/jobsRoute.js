const express = require("express");
const router = express.Router();
const Job = require("../models/jobModel");

router.get("/getalljobs", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.send(jobs);
  } catch (err) {
    return res.status(400).json({ err });
  }
});

router.post("/postjob", async (req, res) => {
  try {
    const newjob = new Job(req.body);
    await newjob.save();
    res.send("Job posted Successfully! ✅");
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.post("/updatejob", async (req, res) => {
  try {
    const updatedJob = await Job.findOneAndUpdate(
      { _id: req.body._id },
      req.body
    );
    res.send("Job updated Successfully!");
  } catch (error) {
    return res.status(400).json({ error });
  }
});

module.exports = router;
