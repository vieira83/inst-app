// server.js

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 5080;
var mongoose = require('mongoose');

var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var path       = require('path');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

var configDB = require('./server-config');

// configuration ===============================================================
mongoose.connect(configDB.url,  {
  useMongoClient: true,
  /* other options */
}); // connect to our database

require('./config-passports')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

app.set('view engine', 'ejs'); // set up ejs for templating
app.set('views', path.join(__dirname, '../public/'));

// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session({ secret: 'keyboard cat' })); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session
 debugger;;
// routes ======================================================================
require('./routes/api')(app, passport); // load our routes and pass in our app and fully configured passport
// require('./routes/auth');
// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);
