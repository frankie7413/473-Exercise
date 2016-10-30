var main = function() {
	"use strict";

    console.log('loaded');
    var displayResult = function(result){
	     $('#result').empty('');
	     $('#result').append(result); 
    };

        //sends json object to server
    $("#create").click(function(){
        console.log('clicked here');
        //create json object
        var myQuestion = {};
        myQuestion.answer = $('#answer').val();
        myQuestion.question = $('#question').val();

						$.ajax({
							method: "POST",
							url: "/question",
							data: myQuestion
						}).done(function(response) {
								 displayResult(response.result);
						})
	});

};

$(document).ready(main);
