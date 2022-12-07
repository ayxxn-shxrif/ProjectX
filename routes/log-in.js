var express = require('express');
var router = express.Router();
const login_controller = require('../controllers/loginController');

/* GET home page. */
router.get('/', login_controller.login_get);

module.exports = router;
