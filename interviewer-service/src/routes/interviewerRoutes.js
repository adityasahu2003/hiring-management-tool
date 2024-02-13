const express = require('express');
const router = express.Router();
const interviewerController = require('../controllers/interviewerController.js');

router.get('/:email', interviewerController.getInterviewerProfile);
router.put('/:email', interviewerController.updateInterviewerProfile);
router.post('/', interviewerController.createInterviewer);
router.delete('/:email', interviewerController.deleteInterviewer);

module.exports = router;