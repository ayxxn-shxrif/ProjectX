var express = require('express');
var router = express.Router();
const message_controller = require('../controllers/messageController');

/* GET home page. */
router.get('/', message_controller.index);

router.post('/', message_controller.message_post);

module.exports = router;
