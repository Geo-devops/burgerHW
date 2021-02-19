var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

//static
app.use(express.static("public"));
// "/static-files", 

//json parse
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//import routes, give them to server
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

//start server
app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});

