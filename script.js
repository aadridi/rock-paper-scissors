console.log("Welcome to a classic game of 'ROCK, PAPER, SCISSORS'");

// Getting the computer's choice by using Math.random
const getComputerChoice = () => {
	let randomNum = Math.floor(Math.random() * 3);
	switch (randomNum) {
		case 0:
			return 'ROCK';
		case 1:
			return 'PAPER';
		case 2:
			return 'SCISSORS';
		default:
			console.log('There has been an error with the computer output');
	}
};

// Getting the player's choice with prompt
const getHumanChoice = () => {
	let answer = prompt('Allright, choose an option from the following possibilies : "ROCK", "PAPER" or "SCISSORS"');
	return answer.toUpperCase();
};

// A function that starts a new round
const playRound = (computerChoice, humanChoice) => {
	if (computerChoice === humanChoice) {
		console.log("It's a tie! None of you gets ANY POINT.");
		return 'tie';
	} else if (computerChoice === 'ROCK') {
		if (humanChoice === 'SCISSORS') {
			console.log('You lose! ROCK beats SCISSORS.');
			return 'computer';
		} else {
			console.log('You win! PAPER beats ROCK.');
			return 'human';
		}
	} else if (computerChoice === 'SCISSORS') {
		if (humanChoice === 'PAPER') {
			console.log('You lose! SCISSORS beats PAPER.');
			return 'computer';
		} else {
			console.log('You win! ROCK beats SCISSORS.');
			return 'human';
		}
	} else if (computerChoice === 'PAPER') {
		if (humanChoice === 'ROCK') {
			console.log('You lose! PAPER beats ROCK.');
			return 'computer';
		} else {
			console.log('You win! SCISSORS beats PAPER.');
			return 'human';
		}
	}
};

const playGame = () => {
	let humanScore = 0;
	let computerScore = 0;

	for (let i = 0; i < 5; i++) {
		console.log(`Game n°${i + 1}:`);
		let result = playRound(getComputerChoice(), getHumanChoice());
		switch (result) {
			case 'computer':
				computerScore++;
				break;
			case 'human':
				humanScore++;
				break;
			case 'tie':
				break;
		}
	}
	console.log(`Human Score is ${humanScore} and Computer Score is ${computerScore}.`);
	alert('Check the console for the final result.');
};

playGame();
