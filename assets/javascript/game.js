$(document).ready(function(){

	// declare global variables
	var randomNumber;
	var scoreMessage;
	var wins = 0;
	var losses = 0;
	var scoreTotal;
	var redNumber;
	var blueNumber;
	var yellowNumber;
	var greenNumber;

	function resetVariables() {
		scoreTotal = 0;
		$("#scoreTotal").html(scoreTotal);

		randomNumber = 19 + Math.floor(Math.random() * 120);
		$("#randomNumber").html(randomNumber);

		redNumber = 1 + Math.floor(Math.random() * 12);
		$("red").attr("data", redNumber);
		blueNumber = 1 + Math.floor(Math.random() * 12);
		$("blue").attr("data", blueNumber);
		yellowNumber = 1 + Math.floor(Math.random() * 12);
		$("yellow").attr("data", yellowNumber);
		greenNumber = 1 + Math.floor(Math.random() * 12);
		$("green").attr("data", greenNumber);
	}


	$( "#red" ).click(function() {
	  console.log( redNumber );
	  scoreTotal = Number(scoreTotal) + Number(redNumber);
	  console.log(scoreTotal)
	  $("#scoreTotal").html(scoreTotal);
	  winner();
	  loser();
	});
	$( "#blue" ).click(function() {
	  scoreTotal = Number(scoreTotal) + Number(blueNumber);
	  $("#scoreTotal").html(scoreTotal);
	  winner();
	  loser();
	});
	$( "#yellow" ).click(function() {
	  scoreTotal = Number(scoreTotal) + Number(yellowNumber);
	  $("#scoreTotal").html(scoreTotal);
	  winner();
	  loser();
	});
	$( "#green" ).click(function() {
	  scoreTotal = Number(scoreTotal) + Number(greenNumber);
	  $("#scoreTotal").html(scoreTotal);
	  winner();
	  loser();
	});

	function winner() {
		if (scoreTotal === randomNumber) {
			wins++;
			$("#wins").html(wins);
			resetVariables();
		}
	}

	function loser() {
		if (scoreTotal > randomNumber) {
			losses++;
			$("#losses").html(losses);
			resetVariables();
		}
	}

	resetVariables();
;
})