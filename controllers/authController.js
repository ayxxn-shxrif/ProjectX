exports.login_get = (req, res) => {
  res.render('log-in');
};

exports.logout_get = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    return res.redirect('/');
  });
};
