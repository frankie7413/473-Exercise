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

//models
var Schema = mongoose.Schema;

var questionSchema = new Schema({
    question: String,
    answer: String
});

var Question = mongoose.model('Question', questionSchema);


//questions

app.get("/question", function (req, res) {
    

});


app.post("/question", function (req, res) {
    var qvalue = req.body.question;
    var avalue = req.body.answer;

    console.log('i am in post');
    console.log(qvalue);
    console.log(avalue);

    var newq = new Question();
    newq.question = qvalue;
    newq.answer = avalue;

    newq.save(function(err){
        if(err){
            console.log(err);
            res.json({'result': 'question was not created'});
        }else {
            res.json({'result': 'question created successfully'});
        }
  });

});
//answer

app.post("/answer", function (req, res) {

});

//score

app.post("/score", function (req, res) {

});


mongoose.connect("mongodb://localhost/test");

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(callback) {
  // yay!
  console.log('success');
});


console.log("listening on localhost:3000");
http.createServer(app).listen(3000);
