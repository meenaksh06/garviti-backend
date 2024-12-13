const express = require('express');
const { getUsers, getLocationLogs } = require('../controllers/adminController');
const router = express.Router();

router.get('/users', getUsers);
router.get('/locations/:userId', getLocationLogs);

module.exports = router;
