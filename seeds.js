var mongoose = require("mongoose");

var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Salmon Creek", 
        image: "https://www.whatsupwithamsterdam.com/cms/wp-content/uploads/2013/07/camping-amsterdamse-bos.jpg",
        description: "blah blah"
    },
    {
        name: "Granite Hill", 
        image: "http://www.jejuweekly.com/news/photo/201309/3470_5530_3517.jpg",
        description: "blah blah"
    },
    {
        name: "Mountain Goot's Rest", 
        image: "http://cbshartford.files.wordpress.com/2011/07/rcky2.jpg",
        description: "blah blah"
    }
];
function seedDB() {
    // remove all campgrounds
    Campground.remove({}, function(err){
        if (err) {
            console.log(err);
        } else {
            console.log("removed campgrounds");
            
            
            //add a few campgrounds
            // data.forEach(function(seed){
            //     Campground.create(seed, function(err, campground){
            //         if (err) {
            //             console.log(err);
            //         } else {
            //             console.log("Added a new campground");
            //             //create a comment
            //             Comment.create(
            //                 {
            //                     text: "This place is great",
            //                     author: "Homer"
            //                 }, function(err, comment){
            //                     if (err) {
            //                         console.log(err);
            //                     } else {
            //                         campground.comments.push(comment);
            //                         campground.save();
            //                         console.log("Createad a comment");
            //                     }

            //                 });
            //         }
            //     })
            // });
        }
    });

    // var User = require("./models/user");
    


}

module.exports = seedDB;

