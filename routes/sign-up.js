var express = require('express');
var router = express.Router();
const signup_controller = require('../controllers/signupController');

/* GET home page. */
router.get('/', signup_controller.signup_get);

router.post('/', signup_controller.signup_post);

router.get('/join', signup_controller.join_get);

router.post('/join', signup_controller.join_post);

module.exports = router;
