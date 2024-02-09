const Hr = require('../models/Hr');

exports.getHrProfile = async (req, res) => {
  try {
    const hr = await Hr.findOne({ user_email_id: req.params.email });
    if (!hr) {
      return res.status(404).json({ message: 'HR not found' });
    }
    res.json(hr);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateHrProfile = async (req, res) => {
  try {
    const updatedHr = await Hr.findOneAndUpdate(
      { work_email_id: req.params.email },
      req.body,
      { new: true }
    );
    res.json(updatedHr);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createHr = async (req, res) => {
    try {
      const newHr = new Hr(req.body);
      await newHr.save();
      res.status(201).json({
        message: 'HR registered successfully',
        HR: newHr
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};

exports.deleteHr = async (req, res) => {
    try {
      const deletedHr = await Hr.findOneAndDelete({ work_email_id: req.params.email });
      if (!deletedHr) {
        return res.status(404).json({ message: 'HR not found' });
      }
      res.status(200).json({ message: 'HR deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};
  

