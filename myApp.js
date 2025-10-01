require('dotenv').config();
let express = require('express');
let app = express();

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
 var message = "Hello json".toUpperCase(); 
  if (process.env.VAR_NAME === "allCaps") {
  message = "Hello json".toUpperCase();
} else {
  message = "Hello World";
}
});

