const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  job_role: { type: String, required: true },
  date_added: { type: Date, default: Date.now },
  number_of_applicants: { type: Number, default: 0 },
  BU: String,
  status: { type: String, enum: ['open', 'closed', 'pending'], default: 'open' },
  location: String,
  description: String,
  compensation_range: {
    lower_limit: Number,
    higher_limit: Number
  },
  number_of_openings: Number,
  last_date_to_apply: Date,
  job_tag: [String],
  job_type: { type: String, enum: ['fulltime', 'parttime', 'internship'] },
  skill_tag: [String],
  experience_level: { type: String, enum: ['entry', 'mid', 'senior'] },
  number_of_rounds: Number
}, { timestamps: true });

module.exports = mongoose.model('Job', jobSchema);

