let express = require('express');
let app = express();

app.get("/", function(req, res) {
app.use("/public", express.static(__dirname + "/public/style.css"))
res.sendFile(__dirname + "/views/index.html")
});
































 module.exports = app;
