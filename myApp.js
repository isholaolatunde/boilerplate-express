let express = require('express');
let app = express();

app.use("/public", express.static(__dirname + "/public"));

app.get("/", function(req, res) {

res.json("/json", {"message" : "Hello Jason"})
});






























 module.exports = app;
