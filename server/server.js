//npm modules
const express = require('express');
const uuid = require('uuid/v4')
const session = require('express-session')
const mongoose = require('mongoose');
const configDB = require('./server-config');
// const FileStore = require('session-file-store')(session);
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt-nodejs');
var User = require('./models/User');



// configuration ===============================================================
mongoose.connect(configDB.url,  {
  useMongoClient: true,
  /* other options */
}); // connect to our database

// configure passport.js to use the local strategy
passport.use(new LocalStrategy(
  { usernameField: 'username',
    passwordField: 'password',
     passReqToCallback : true},
  (req, username, password, done) => {
    User.findOne({ 'username' : username }, function(err, user) {
      console.log('test mongo');
      const reqUsername = user && user.username;
      if (!reqUsername) {
        return done(null, false, { message: 'Invalid credentials.\n' });
      }
      if (!bcrypt.compareSync(password, user.password)) {
        return done(null, false, { message: 'Invalid credentials.\n' });
      }
      return done(null, reqUsername);
    });
  }
));

passport.use('local-signup', new LocalStrategy(
  {
     passReqToCallback : true},
  (req, username, password, done) => {
    User.findOne({ 'username' : username }, function(err, user) {
      if (err) {return done(err);}
      const reqUsername = user && user.username;

      if (reqUsername) {
        return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
      } else {
          var newUser = new User();
          // set the user's local credentials
          newUser.username  = username;
          newUser.password = password;
          newUser.createUser(newUser, function(err){
            if (err) throw err;
              return done(null, newUser);
          });
      }
    });
  }
));

// tell passport how to serialize the user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
   User.findById(id, function(err, user) {
       done(err, user);
   });
 });

// create the server
const app = express();

// add & configure middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({
  genid: (req) => {
    return uuid() // use UUIDs for session IDs
  },
  //store: new FileStore(),
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());

// create the homepage route at '/'
app.get('/', (req, res) => {
  res.send(`You got home page!\n`)
})

// create the login get and post routes
app.get('/login', (req, res) => {
  res.send(`You got the login page!\n`)
})

app.post('/login', (req, res, next) => {
  console.dir(req, { depth: null });
  //console.log("username is" + req.body);
   //console.log("password is" + req.body.password);

  passport.authenticate('local', (err, user, info) => {
    if(info) {return res.send(info.message)}
    if (err) { return next(err); }
    if (!user) { return res.redirect('/login'); }
    req.login(user, (err) => {
      if (err) { return next(err); }
      return res.redirect('/authrequired');
    })
  })(req, res, next);
})

app.post('/sign-up', (req, res, next) => {
  console.dir(req, { depth: null });
  //console.log("username is" + req.body);
   //console.log("password is" + req.body.password);

  passport.authenticate('local-signup', (err, user, info) => {
    if(info) {return res.send(info.message)}
    if (err) { return next(err); }
    if (!user) { return res.redirect('/login'); }
    req.login(user, (err) => {
      if (err) { return next(err); }
      return res.redirect('/authrequired');
    })
  })(req, res, next);
})

app.get('/authrequired', (req, res) => {
  if(req.isAuthenticated()) {
    res.send('you hit the authentication endpoint\n')
  } else {
    res.redirect('/')
  }
})

// tell the server what port to listen on
app.listen(5080, () => {
  console.log('Listening on localhost:5080')
})
