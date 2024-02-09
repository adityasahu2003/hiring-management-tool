const express = require('express');
const router = express.Router();
const applicantController = require('../controllers/applicantController');

router.get('/:email', applicantController.getApplicantProfile);
router.put('/:email', applicantController.updateApplicantProfile);
router.post('/', applicantController.createApplicant);
router.delete('/:email', applicantController.deleteApplicant);

module.exports = router;