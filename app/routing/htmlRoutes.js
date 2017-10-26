// DEPENDENCIES =========================================
// path package to get the correct file path for our html
var path = require("path");

// ROUTING ===============================================

module.exports = function(app) {

  // HTML GET Requests ===================================
  
  // app.get("/", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/home.html"));
  // });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // Default catch-all route that leads to home page

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

};
