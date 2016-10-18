var main = function() {
	"use strict";

	//gets value for average         
        var getAverage = function() {
            var arr = $('#average').val();
	    arr = arr.split(" ");
            console.log(arr);
            return arr;
        };


	$("#avgbt").click(function(){
        var myArray = {'average': []};
        myArray.average = getAverage();
		
		$.ajax({
			method: "POST",
			url: "/average",
			data: myArray
		}).done(function(response) {
			console.log("average data sent");
                        console.log(response.result);
			})
	});

};

$(document).ready(main);
