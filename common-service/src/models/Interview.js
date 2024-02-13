const mongoose = require('mongoose');

const interviewSchema = new mongoose.Schema({
  user_email_id: { type: String, required: true, ref: 'Applicant' },
  work_email_id: { type: String, required: true, ref: 'Interviewer' },
  start_time: { type: Date, required: true },
  duration: { type: Number, required: true },
  job_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Job' },
  round_number: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Interview', interviewSchema);