const passport = require('passport');
const { body, validationResult } = require('express-validator');

exports.login_get = (req, res) => {
  res.render('log-in');
};

exports.login_post = [
  body('username')
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage('Username must be specified.'),
  body('password')
    .trim()
    .isLength({ min: 1 })
    .withMessage('Enter a password.')
    .escape(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render('log-in', {
        errors: errors.array(),
      });
    }
  },
];
