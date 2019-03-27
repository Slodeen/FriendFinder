// Configurations
var express = require("express");
var app = express();

// setting it up if deploying to Heroku
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Listner
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
