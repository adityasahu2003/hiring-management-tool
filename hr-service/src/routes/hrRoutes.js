const express = require('express');
const router = express.Router();
const hrController = require('../controllers/hrController.js');

router.get('/:email', hrController.getHrProfile);
router.put('/:email', hrController.updateHrProfile);
router.post('/', hrController.createHr);
router.delete('/:email', hrController.deleteHr);

module.exports = router;