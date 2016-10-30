var express = require("express"),
	http =require("http"),
        bodyParser = require('body-parser'),
	app = express();

var MongoClient = require("mongodb").MongoClient;
var mongourl = "mongodb://localhost/test";

var redis = require("redis"),
    client = redis.createClient();

client.on("error", function (err) {
    console.log("Error " + err);
});

app.use(express.static(__dirname + "/client"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



// Writing function for stuffe
var trivia = {};
var score = {}; 

//questions

app.get("/question", function (req, res) {
    

});


app.post("/question", function (req, res) {

});
//answer

app.post("/answer", function (req, res) {

});

//score

app.post("/score", function (req, res) {

});






console.log("listening on localhost:3000");
http.createServer(app).listen(3000);
