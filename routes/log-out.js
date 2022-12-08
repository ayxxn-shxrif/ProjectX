const express = require('express');
const auth_controller = require('../controllers/authController');

const router = express.Router();

router.get('/', auth_controller.logout_get);

module.exports = router;
