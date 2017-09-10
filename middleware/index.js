var middlewareObj = {};
var Campground = require("../models/campground");
var Comment = require("../models/comment");

//middleware
middlewareObj.isLoggedIn = function(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
};

middlewareObj.checkCampgroundOwnership = function(req, res, next) {
    if (req.isAuthenticated()) {
        Campground.findById(req.params.id, function(err, foundCampground){
        if (err) {
            console.log(err);
            res.redirect("back");
        } else {
            if (String(foundCampground.author.id) === String(req.user._id)) {
                next();
            } else {
                console.log("You do not have permission to do that");
                res.redirect("back");
            }
        }
    });
    } else {
        console.log("You need to log in to do that.");
        res.redirect("back");
    }
};

middlewareObj.checkCommentOwnership = function(req, res, next) {
    if (req.isAuthenticated()) {
        Comment.findById(req.params.comment_id, function(err, foundComment){
        if (err) {
            console.log(err);
            res.redirect("back");
        } else {
            if (String(foundComment.author.id) === String(req.user._id)) {
                next();
            } else {
                console.log("You do not have permission to do that");
                res.redirect("back");
            }
        }
    });
    } else {
        console.log("You need to log in to do that.");
        res.redirect("back");
    }
};

module.exports = middlewareObj;