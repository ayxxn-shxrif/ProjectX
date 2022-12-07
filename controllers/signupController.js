const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const async = require('async');
const User = require('../models/user');

exports.signup_get = (req, res) => {
  res.render('sign-up');
};

exports.signup_post = [
  body('username')
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage('Username must be specified.')
    .isLength({ max: 50 })
    .withMessage('Category title must be maximum 50 characters.'),
  body('name')
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage('Name must be specified.')
    .isLength({ max: 100 })
    .withMessage('Name must be maximum 100 characters.'),
  body('surname')
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage('Surname must be specified.')
    .isLength({ max: 100 })
    .withMessage('Surname must be maximum 100 characters.'),
  body('password')
    .isStrongPassword({
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 0,
      minSymbols: 0,
    })
    .withMessage(
      'Your password needs to be at least 8 characters long, have one lowercase and one uppercase character'
    )
    .isLength({ max: 50 })
    .withMessage('Password can be be maximum 50 characters.')
    .trim()
    .escape(),
  body('conf-pass')
    .isLength({ min: 1 })
    .withMessage('Enter password confirmation.')
    .custom((value, { req }) => value === req.body.password)
    .withMessage('Passwords do not match.'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render('sign-up', {
        errors: errors.array(),
      });
    }
    async.waterfall([
      function (callback) {
        User.find({ username: req.body.username }).exec((err, users) => {
          if (err) {
            callback(err, null);
          }
          if (users !== null) {
            const error = new Error('Username is already in use.');
            error.status = 409;
            res.render('sign-up', { errors: error });
            callback(error, null);
          }
          if (users == null) {
            callback(null, users);
          }
        });
      },
      function (callback, users) {
        if (users) {
          bcrypt.hash(req.body.password, 10, (error, hashedPassword) => {
            if (error) {
              return next(error);
            }
            const user = new User({
              username: req.body.username,
              password: hashedPassword,
              name: req.body.name,
              surname: req.body.surname,
            });
            user.save((err) => {
              if (err) {
                return next(err);
              }
              return res.redirect('/');
            });
          });
        }
      },
    ]);
  },
];
