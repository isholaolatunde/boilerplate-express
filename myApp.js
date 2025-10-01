let express = require('express');
let app = express();

app.use("/public", express.static(__dirname + "/public"));

app.get("/", function(req, res) {

res.sendFile(__dirname + "/views/index.html")
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});





























 module.exports = app;
