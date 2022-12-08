var express = require('express');
var router = express.Router();
const join_controller = require('../controllers/joinController');

/* GET home page. */
router.get('/', join_controller.join_get);

router.post('/', join_controller.join_post);

module.exports = router;
