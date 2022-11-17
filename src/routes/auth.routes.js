const express = require('express');

const router = express.Router();

const { startSession } = require('../controllers/auth.controllers');

router.route('/login')
        .post( startSession )

module.exports = router;

