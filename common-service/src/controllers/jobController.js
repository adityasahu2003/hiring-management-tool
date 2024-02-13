const Job = require('../models/Job');

exports.getJobDetails = async (req, res) => {
    try {
        const job = await Job.findOne({ _id: req.params.job_id });
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.json(job);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateJobDetails = async (req, res) => {
    try {
        const updatedJob = await Job.findOneAndUpdate(
            { _id: req.params.job_id },
            req.body,
            { new: true }
        );
        res.json(updatedJob);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createJob = async (req, res) => {
    try {
        const newJob = new Job(req.body);
        await newJob.save();
        res.status(201).json({
            message: 'Job posted successfully',
            job: newJob
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteJob = async (req, res) => {
    try {
        const deletedJob = await Job.findOneAndDelete({ _id: req.params.job_id });
        if (!deletedJob) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.status(200).json({ message: 'Job deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};