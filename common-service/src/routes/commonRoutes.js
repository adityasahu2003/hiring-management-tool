const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');
const applicationController = require('../controllers/applicationController');
const interviewController = require('../controllers/interviewController');

router.get('/jobs/:job_id', jobController.getJobDetails);
router.put('/jobs/:job_id', jobController.updateJobDetails);
router.post('/jobs', jobController.createJob);
router.delete('/jobs/:job_id', jobController.deleteJob);

router.get('/applications/:application_id', applicationController.getApplicationDetails);
router.put('/applications/:application_id', applicationController.updateApplicationDetails);
router.post('/applications', applicationController.createApplication);
router.delete('/applications/:application_id', applicationController.deleteApplication);

router.get('/interviews/:interview_id', interviewController.getInterviewDetails);
router.put('/interviews/:interview_id', interviewController.updateInterviewDetails);
router.post('/interviews', interviewController.createInterview);
router.delete('/interviews/:interview_id', interviewController.deleteInterview);

module.exports = router;