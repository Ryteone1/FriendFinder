// Load Data - we're linking our routes to a series of "data" sources.
// These data sources hold arrays of information in the friends array.

var friends = require("../data/friends.js");

module.exports = function (app) {
    // API Get Requests


// GET route displays a JSON of all possible friends.

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    

// POST route handles survey results and compatibility logic.

    app.post("/api/friends", function (req, res) {
        // Our "server" will respond to requests and provide users with all the "friends"
        friends.push(req.body);
    });

}