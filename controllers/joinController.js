const { body, validationResult } = require('express-validator');
const User = require('../models/user');

exports.join_get = (req, res) => {
  res.render('join', { user: req.user });
};

exports.join_post = [
  body('password')
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage('Enter a password')
    .bail()
    .matches('1234')
    .withMessage('Wrong password!'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render('join', {
        errors: errors.array(),
        user: req.user,
      });
    }
    User.findByIdAndUpdate(req.user.id, { is_member: true }, (err) => {
      if (err) {
        return next(err);
      }
      return res.redirect('/');
    });
  },
];
