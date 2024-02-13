const Interviewer = require('../models/Interviewer');

exports.getInterviewerProfile = async (req, res) => {
  try {
    const interviewer = await Interviewer.findOne({ work_email_id: req.params.email });
    if (!interviewer) {
      return res.status(404).json({ message: 'Interviewer not found' });
    }
    res.json(interviewer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateInterviewerProfile = async (req, res) => {
  try {
    const updatedInterviewer = await Interviewer.findOneAndUpdate(
      { work_email_id: req.params.email },
      req.body,
      { new: true }
    );
    res.json(updatedInterviewer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createInterviewer = async (req, res) => {
    try {
      const newInterviewer = new Interviewer(req.body);
      await newInterviewer.save();
      res.status(201).json({
        message: 'Interviewer registered successfully',
        interviewer: newInterviewer
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};

exports.deleteInterviewer = async (req, res) => {
    try {
      const deletedInterviewer = await Interviewer.findOneAndDelete({ work_email_id: req.params.email });
      if (!deletedInterviewer) {
        return res.status(404).json({ message: 'Interviewer not found' });
      }
      res.status(200).json({ message: 'Interviewer deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};
  

