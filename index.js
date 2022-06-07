var express = require("express");
var app = express();

// set the view engine to ejs
app.set("view engine", "ejs");
const path = require("path");
// use res.render to load up an ejs view file
app.use(express.static(path.join(__dirname, "public"))); //direct the path
app.set("views", path.join(__dirname, "views"));
// index page
//routing 3 routs 
app.get("/", function (req, res) {
  
  var tagline =
    "CEO Of This Organization: Ebtisam abdulkaliq";

  res.render("pages/index", {
    tagline: tagline,
  });
});

// about page
app.get("/about", function (req, res) {
  res.render("pages/about"); //used render take me to the page
});

app.get("/contact", function (req, res) {
  res.render("pages/contact");
});

app.listen(8080);
console.log('Server running on http://localhost:8080/');
