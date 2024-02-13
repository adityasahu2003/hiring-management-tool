const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');
const applicationController = require('../controllers/applicationController');
const interviewController = require('../controllers/interviewController');

router.get('/jobs/:job_id', jobController.getJobDetails);
router.put('/jobs/:job_id', jobController.updateJobDetails);
router.post('/jobs', jobController.createJob);
router.delete('/jobs/:job_id', jobController.deleteJob);

router.get('/applications/:application_id', jobController.getJobDetails);
router.put('/applications/:application_id', jobController.updateJobDetails);
router.post('/applications', jobController.createJob);
router.delete('/applications/:application_id', jobController.deleteJob);

router.get('/interviews/:interview_id', jobController.getJobDetails);
router.put('/interviews/:interview_id', jobController.updateJobDetails);
router.post('/interviews', jobController.createJob);
router.delete('/interviews/:interview_id', jobController.deleteJob);

module.exports = router;