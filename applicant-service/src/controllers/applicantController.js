const Applicant = require('../models/Applicant');

exports.getApplicantProfile = async (req, res) => {
  try {
    const applicant = await Applicant.findOne({ user_email_id: req.params.email });
    if (!applicant) {
      return res.status(404).json({ message: 'Applicant not found' });
    }
    res.json(applicant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateApplicantProfile = async (req, res) => {
  try {
    const updatedApplicant = await Applicant.findOneAndUpdate(
      { user_email_id: req.params.email },
      req.body,
      { new: true }
    );
    res.json(updatedApplicant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createApplicant = async (req, res) => {
    try {
      const newApplicant = new Applicant(req.body);
      await newApplicant.save();
      res.status(201).json({
        message: 'Applicant registered successfully',
        applicant: newApplicant
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};

exports.deleteApplicant = async (req, res) => {
    try {
      const deletedApplicant = await Applicant.findOneAndDelete({ user_email_id: req.params.email });
      if (!deletedApplicant) {
        return res.status(404).json({ message: 'Applicant not found' });
      }
      res.status(200).json({ message: 'Applicant deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};
  

