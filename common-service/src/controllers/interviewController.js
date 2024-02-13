const Interview = require('../models/Interview');

exports.getInterviewDetails = async (req, res) => {
    try {
        const interview = await Interview.findOne({ _id: req.params.interview_id });
        if (!interview) {
            return res.status(404).json({ message: 'Interview not found' });
        }
        res.json(interview);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateInterviewDetails = async (req, res) => {
    try {
        const updatedInterview = await Interview.findOneAndUpdate(
            { _id: req.params.interview_id },
            req.body,
            { new: true }
        );
        res.json(updatedInterview);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createInterview = async (req, res) => {
    try {
        const newInterview = new Interview(req.body);
        await newInterview.save();
        res.status(201).json({
            message: 'Interview created successfully',
            interview: newInterview
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteInterview = async (req, res) => {
    try {
        const deletedInterview = await Interview.findOneAndDelete({ _id: req.params.interview_id });
        if (!deletedInterview) {
            return res.status(404).json({ message: 'Interview not found' });
        }
        res.status(200).json({ message: 'Interview deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};