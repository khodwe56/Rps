let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("UserScore")
const computerScore_span = document.getElementById("ComputerScore")
const sb_div = document.querySelector(".sb")
const res_p = document.querySelector(".victoryreport > p")
const stone_div = document.getElementById("r")
const scissor_div = document.getElementById("s")
const paper_div = document.getElementById("p")


main()

function main(){
	paper_div.addEventListener('click',function() {
	game("p");
	})

	stone_div.addEventListener('click',function() {
		game("r");
	})

	scissor_div.addEventListener('click',function() {
		game("s");
	})
}

function getComputerChoice(){
	const choices = ['r','p','s'];
	const num = Math.floor(Math.random()*3);
	return choices[num];
}

function game(userChoice){
	const computerChoice = getComputerChoice()
	switch (userChoice + computerChoice){
		case "sp":
		case "rs":
		case "pr":
		win(userChoice,computerChoice);
		break;

		case "ps":
		case "sr":
		case "rp":
		lose(userChoice,computerChoice);
		break;

		case "ss":
		case "rr":
		case "pp":
		draw(userChoice,computerChoice);
		break;
	}
;}


function win(userChoice,computerChoice){
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	res_p.innerHTML = convertToReadable(userChoice) + " destroys " + convertToReadable(computerChoice) + ". You Win";
	document.getElementById(userChoice).classList.add('green-glow');
	setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow')},400);
}

function lose(userChoice,computerChoice){
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	res_p.innerHTML = convertToReadable(userChoice) + " gets destroyed by " + convertToReadable(computerChoice) + ". You Lose";
	document.getElementById(userChoice).classList.add('red-glow')
	setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow')},400);

}

function draw(userChoice,computerChoice){
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	res_p.innerHTML = convertToReadable(userChoice) + " stays cool with " + convertToReadable(computerChoice) + ". You Draw";
	document.getElementById(userChoice).classList.add('gray-glow')
	setTimeout(function(){document.getElementById(userChoice).classList.remove('gray-glow')},400);

}

function convertToReadable(choice){
	if(choice === 'r'){
		return "Rock";
	}
	else if(choice === 's'){
		return "Scissor";
	}
	return "Paper";
}