const { body, validationResult } = require('express-validator');
const User = require('../models/user');

exports.index = (req, res) => {
  res.render('new-message', { user: req.user });
};

exports.message_post = (req, res, next) => {
  res.render('new-message', { user: req.user });
};
