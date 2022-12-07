exports.signup_get = (req, res, next) => {
  res.render('sign-up');
};

exports.signup_post = (req, res, next) => {
  res.send('Index Signup');
};
