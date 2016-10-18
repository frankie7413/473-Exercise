var main = function() {
	"use strict";

	//gets value for average from input field        
        var getAverage = function() {
            var arr = $('#average').val();
	    arr = arr.split(" ");
            console.log(arr);
            return arr;
        };
        //resuse this function to display your results the type is the type of array
        var displayResult = function(type, result){
          $('#result').empty('');
          $('#result').append("Result for " + type  + " is " + result); 
        };

        //sends json object to server
	$("#avgbt").click(function(){
        //create json object
        var myArray = {'average': []};
        myArray.average = getAverage();
		
		$.ajax({
			method: "POST",
			url: "/average",
			data: myArray
		}).done(function(response) {
			console.log("average data sent");
                        displayResult('average', response.result);
			})
	});

};

$(document).ready(main);
