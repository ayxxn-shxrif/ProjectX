const express = require('express');
const Message = require('../models/message');

const router = express.Router();

router.get('/', (req, res, next) => {
  Message.find()
    .populate('user')
    .exec((err, messages) => {
      if (err) {
        next(err);
      }
      res.render('index', { title: 'Express', user: req.user, messages });
    });
});

module.exports = router;
