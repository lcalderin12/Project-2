// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");
var path = require("path");
const { get } = require("http");

// Routes

module.exports = function (app) {
  // index route loads view/index.handlebars
  app.get("/", function (req, res) {
    if (req.user) {
      res.render("index");
    } else {
      res.render("login");
    }
  });

  app.get("/login", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render("index");
    }else{
      res.render("login");
    }

  });

  app.get("/signup", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render("index");
    }else{
      res.render("signup");
    }
  });

  app.get("/all", function (req, res) {
    if (req.user) {
      res.render("all");
    } else {
      res.render("login");
    }

  });

  app.get("/add", function (req, res) {
    if (req.user) {
      res.render("add");
    } else {
      res.render("login");
    }
  });

  app.get("/contact", function (req, res) {
    res.render("contact");
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("login");

  });

  //redundanct
  // app.get("/", isAuthenticated, function (req, res) {
  //   res.render("index");
  //   res.render("contact");
  // });
  // app.get("/all", isAuthenticated, function (req, res) {
  //   res.render("all");
  // });
};
