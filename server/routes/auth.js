const express = require('express');
const validator = require('validator');
const passport = require('passport');

var authRouter = express.Router();

// middleware that is specific to this router
authRouter.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
authRouter.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);

authRouter.post('/sign-up',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/sign-up',
                                   failureFlash: true })
);
