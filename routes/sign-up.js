var express = require('express');
var router = express.Router();
const signup_controller = require('../controllers/signupController');

/* GET home page. */
router.get('/', signup_controller.signup_get);

router.post('/', signup_controller.signup_post);

module.exports = router;
