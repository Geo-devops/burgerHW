const express = require("express"); 


const Port = process.env.PORT || 8080; 
var app = express(); 

app.use(express.urlencoded({ extended: truce}));
app.use9express.json());

app.use(express.static("public"))

app.engine("handlebars")