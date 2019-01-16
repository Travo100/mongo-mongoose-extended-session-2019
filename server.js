var express = require("express");
var app = express();
var axios = require("axios");
var cheerio = require("cheerio");
var mongoose = require("mongoose");

var PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

// create a scrape route 

// create a route to get scraped data

app.listen(PORT, function(){
    console.log(`App is listening on http://localhost:${PORT}`);
});