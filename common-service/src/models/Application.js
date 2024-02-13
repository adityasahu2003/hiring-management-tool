const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  user_email_id: { type: String, required: true, ref: 'Applicant' },
  job_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Job' },
  date_of_applied: { type: Date, default: Date.now },
  status: { 
    type: String, 
    enum: ['rejected', 'offered', 'hired', 'sent', 'shortlisted', 'action-needed', 'ongoing'], 
    required: true 
  },
  cv_timestamp: { type: Date },
  last_round_reached: { type: Number }
}, { timestamps: true });

module.exports = mongoose.model('Application', applicationSchema);
