const mongoose = require('mongoose');

const interviewerSchema = new mongoose.Schema({
  display_name: { type: String, required: true },
  work_email_id: { type: String, required: true, unique: true },
  phone_number: String,
  profile_pic_path: String,
  work_experience: String
});

module.exports = mongoose.model('Interviewer', interviewerSchema);
