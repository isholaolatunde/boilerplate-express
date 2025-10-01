let express = require('express');
let app = express();

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
   var response = "Hello World".toUpperCase(); // now becomes "HELLO WORLD"
if (process.env.VAR_NAME === "allCaps") {
  response = "Hello World".toUpperCase();
} else {
  response = "Hello World";
}
});




























 module.exports = app;
