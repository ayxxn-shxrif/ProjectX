const { body, validationResult } = require('express-validator');
const Message = require('../models/message');

exports.index = (req, res) => {
  res.render('new-message', { user: req.user });
};

exports.message_post = [
  body('title')
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage('Title must be specified.')
    .isLength({ max: 150 })
    .withMessage('Title must be maximum 150 characters.'),
  body('text')
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage('Message must have at least 1 character.')
    .isLength({ max: 500 })
    .withMessage('Name must be maximum 500 characters.'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render('new-message', {
        errors: errors.array(),
        user: req.user,
      });
    }
    if (req.user) {
      const message = new Message({
        title: req.body.title,
        text: req.body.text,
        user: req.user.id,
      });
      message.save((err) => {
        if (err) {
          return next(err);
        }
        return res.redirect('/');
      });
    } else {
      res.render('new-message', { user: req.user });
    }
  },
];

exports.message_delete = (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  Message.findByIdAndDelete(id).exec((err) => {
    if (err) return next(err);
  });
  res.redirect('/');
};
