var express = require("express"),
	http =require("http"),
        bodyParser = require('body-parser'),
	app = express();


app.use(express.static(__dirname + "/client"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// Writing function for square
function sq(n){
	return n*n;
};

app.get('/sq/:n', function (req,res){
	var result = sq(req.params.n);
	return res.json({answer:result});
});

//// this functions work below ////

// Average
function get_average(nums){
        nums = nums.map(Number);
        console.log(nums);
        var sum = 0;
	
	nums.forEach(function(value){
               sum += value;
	});
        console.log(sum);
	return (sum / nums.length);
}

app.post("/average", function (req,res){
	var arr = req.body.average;
	var avg = get_average(arr);
        console.log(avg);
	res.json({'result': avg});
});


console.log("listening on localhost:3000");
http.createServer(app).listen(3000);
