var friends = require("../data/friends.js");

module.exports = function (app) {

// GET route displays a JSON of all possible friends.

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

// ====================================================  

// POST route handles survey results and compatibility logic.

    app.post("/api/friends", function (req, res) {        
        friends.push(req.body);
    });

}