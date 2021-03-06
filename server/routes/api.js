
var path       = require('path');
module.exports = function(app, passport) {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {
        //res.render('index.html'); // load the index.ejs file
        res.sendFile(path.join(__dirname + '../../../public/index.html'));
    });

    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    app.get('/login', function(req, res, next) {

        // render the page and pass in any flash data if it exists
        res.sendFile(path.join(__dirname + '../../../public/login.html'));
    });

    // process the login form
    // app.post('/login', do all our passport stuff here);

    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
    // app.get('/signup', function(req, res, next) {
    //
    //     // render the page and pass in any flash data if it exists
    //     res.render('signup', { message: req.flash('signupMessage') });
    // });

    // process the signup form
    // app.post('/signup', do all our passport stuff here);

    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user // get the user out of session and pass to template
        });
    });

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res, next) {
        req.logout();
        res.redirect('/');
    });


    app.post('/login', passport.authenticate('local-login', { successRedirect: '/profile',
                                       failureRedirect: '/index',
                                       failureFlash: true })
    );

    app.post('/sign-up', passport.authenticate('local-signup', { successRedirect: '/',
                                       failureRedirect: '/sign-up',
                                       failureFlash: true })
    );

    app.get('/*',function(req, res, next){
        console.log("Error 404 request to" + req.url);
        res.sendFile(path.join(__dirname + '../../../public/index.html'));
    });
};




// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
