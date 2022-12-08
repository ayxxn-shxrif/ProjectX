const express = require('express');
const message_controller = require('../controllers/messageController');

const router = express.Router();

router.get('/:id', message_controller.message_delete);

module.exports = router;
