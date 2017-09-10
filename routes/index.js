var express = require("express");
var router = express.Router();
var User = require("../models/user");
var passport = require("passport");

router.get("/", function(req, res){
    res.render("landing");
});

//=============
// Auth Routes
//=============

// show register form
router.get("/register", function(req, res){
    res.render("register");
});

// submit register info
router.post("/register", function(req, res){
    // never save the password to db, but save the hashed version
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if (err) {
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function(){ // could use twitter, facebook, etc here
            res.redirect("/campgrounds");
        });
    });
});

// show login form
router.get("/login", function(req, res){
    res.render("login");
});

//login logic
//middleware
//app.post("/login", middleware, callback)
router.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/campgrounds",
        failureRedirect: "/login"
    }), function(req, res){
        res.render("login"); 
});

// logout route
router.get("/logout", isLoggedIn, function(req, res) {
    req.logout();
    res.redirect("/campgrounds");
});

// middleware
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

module.exports = router;