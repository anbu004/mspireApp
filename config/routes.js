const config = require('./config');
const pspt = require('passport');

module.exports = function (app,  passport) {

  app.get('/', function (req, res) {
    if (req.isAuthenticated()) {
      res.render('index.html',
        {
          user: req.user
        });
    } else {
      res.render('index.html',  //home
        {
          user: null
        });
    }
  })
  //console.log(user);

  app.get('/login',function(req,res){
    pspt.authenticate(config.development.passport.strategy,
      {
        successRedirect: '/',
        failureRedirect: '/login'
      });
  }
  );

  app.post('/', function (req, res) {
      res.render('index.html');
    }
  );

  /*app.get('/signup', function (req, res) {
    res.render('signup');
  });*/

  app.get('/profile', function (req, res) {
    if (req.isAuthenticated()) {
      res.render('profile',
        {
          user: req.user
        });
    } else {
      res.redirect('/login');
    }
  });

  app.get('/logout', function (req, res) {
    req.logout();
    // invalidate session on IP
    res.redirect('/');
  });

};