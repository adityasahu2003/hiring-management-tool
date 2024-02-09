const mongoose = require('mongoose');

const applicantSchema = new mongoose.Schema({
  display_name: { type: String, required: true },
  user_email_id: { type: String, required: true, unique: true },
  phone_number: String,
  profile_pic_path: String,
  cv_path: {
    timestamp: Date,
    cv_url: String
  },
  skill_tag: [String],
  job_type_pref: [String],
  location_pref: [String],
  notice_period: Number,
  current_company: String,
  job_tag: [String],
  work_experience: String,
  expected_salary: {
    lower_limit: Number,
    higher_limit: Number
  }
});

module.exports = mongoose.model('Applicant', applicantSchema);
