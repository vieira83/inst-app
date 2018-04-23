const express = require('express');
const validator = require('validator');
const passport = require('passport');

var authRouter = express.Router();

// middleware that is specific to this router
app.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  console.log("ERROR");
  next()
})
// define the home page route
app.post('/login',
  passport.authenticate('local', { successRedirect: '/profile',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);

app.post('/sign-up',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/sign-up',
                                   failureFlash: true })
);
