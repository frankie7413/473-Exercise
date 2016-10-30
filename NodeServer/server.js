var express = require("express"),
	http =require("http"),
        bodyParser = require('body-parser'),
	app = express();

var mongoose = require('mongoose');
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




//mongoose set up
mongoose.connect("mongodb://localhost/test");
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(callback) {
  // yay!
  console.log('success');
});



console.log("listening on localhost:3000");
http.createServer(app).listen(3000);
