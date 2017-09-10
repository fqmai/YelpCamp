# How to run this project
* Run mongod in the background
* Enter command line: node app.js



# Architecture Design
## Style the campgrounds page
* Add a better header/title
* Make campgrounds display in a grid

## Style the Navbar and Form
* Add a navbar to all templates
* Style the new campground form

## Add Mongoose
* Install and configure Mongoose
* Setup campground model
* Use campground model inside of our routes

## Show Page
* Review the RESTful routes we've seen so far
* Add description to our campground model
* Show db.collection.drop()
* Add a show route/template

## Refactor Mongoose Code
* Create a models directory
* Use module.exports
* Require everything correctly

## Add Seeds File
* Add a seeds.js file
* Run the seeds file every time the server starts

## Add the comment model
* Make our errors go away
* Display comments on campground show page

## Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form

## Style Show Page
* Add sidebar to show page
* Display comments nicely

## Auth Pt. 1 - Add User Model
* Install all packages needed for auth
* Define User model 

## Auth Pt. 2 - Register
* Configure Passport
* Add register routes
* Add register template

## Auth Pt. 3 - Login
* Add login routes
* Add login template

## Auth Pt. 4 - Logout/Navbar
* Add logout route
* Prevent user from adding a comment if not signed in
* Add links to navbar

## Auth Pt. 5 - Show/Hide Links
* Show/hide auth links in navbar correctly

## Refactor the Routes
* Use express router to reorganize all routes

## User + Comments
* Associate users and comments
* Save author's name to a comment automatically

## Users + Campgrounds
* Prevent an unauthenticated user from creating a campground
* Save username+id to newly created campground

## Editing Campgrounds
* Add method-override
* Add edit route for campgrounds
* Add link to edit page
* Add update route
* Fix $set problem

## Authorization
* User can only edit his'her campgrounds
* User can only delete his'her campgrounds
* Hide/Show edit and delete buttons

## Editing Comments
* Add Edit route for comments
* Add Edit buttons
* Add Update route

## Deleting Comments
* Add destroy route
* Add Delete button

## Authorization Part 2: Comments
* User can only edit his/her comments
* User can only delete his/her comments
* Hide/Show edit and delete buttons
* Refactor Middleware


# Routing
* INDEX   /campgrounds
* NEW     /campgrounds/new
* CREATE  /campgrounds
* SHOW    /campgrounds/:id
* NEW     /campgrounds/:id/comments/new  GET
* CREATE  /campgrounds/:id/comments      POST


# RESTFUL ROUTES
* name    url         verb    desc.
* =====================================================
* INDEX   /dogs       GET     Display a list of all dog
* NEW     /dogs/new   GET     Display a form to make a new dog
* CREATE  /dogs       POST    Add new dog to DB
* SHOW    /dogs/:id   GET     Show info about one dog

* api.github.com/users
