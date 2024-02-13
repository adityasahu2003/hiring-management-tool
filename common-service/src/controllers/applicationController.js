const Application = require('../models/Application');

exports.getApplicationDetails = async (req, res) => {
    try {
        const application = await Application.findOne({ _id: req.params.application_id });
        if (!application) {
            return res.status(404).json({ message: 'Application not found' });
        }
        res.json(application);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateApplicationDetails = async (req, res) => {
    try {
        const updatedApplication = await Application.findOneAndUpdate(
            { _id: req.params.application_id },
            req.body,
            { new: true }
        );
        res.json(updatedApplication);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createApplication = async (req, res) => {
    try {
        const newApplication = new Application(req.body);
        await newApplication.save();
        res.status(201).json({
            message: 'Application submitted successfully',
            job: newApplication
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteApplication = async (req, res) => {
    try {
        const deletedApplication = await Job.findOneAndDelete({ _id: req.params.application_id });
        if (!deletedApplication) {
            return res.status(404).json({ message: 'Application not found' });
        }
        res.status(200).json({ message: 'Application deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};