const express = require("express"); 


const Port = process.env.PORT || 8080; 
var app = express(); 

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handbars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// will need routes here 

app.use(routes);