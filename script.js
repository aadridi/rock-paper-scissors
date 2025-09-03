console.log("Welcome to a classic game of 'ROCK, PAPER, SCISSORS'");

// Getting the computer's choice
const getComputerChoice = () => {
	let randomNum = Math.floor(Math.random() * 3);
	switch (randomNum) {
		case 0:
			return 'ROCK';
		case 1:
			return 'PAPER';
		case 2:
			return 'SCISSORS';
	}
};

let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('.buttons button');
const currentRound = document.querySelector('.current-round');
const computerScoreSpan = document.querySelector('.computer-score');
const humanScoreSpan = document.querySelector('.human-score');

// Adding EventListeners for each button
buttons.forEach((button) =>
	button.addEventListener('click', (e) => {
		// Getting the player's choice
		let playerSelection = e.target.value.toUpperCase();
		let result = playRound(getComputerChoice(), playerSelection);

		if (result === 'computer') {
			computerScore++;
		} else if (result === 'human') {
			humanScore++;
		}

		currentRound.textContent = `Round result: ${result}`;
		computerScoreSpan.textContent = computerScore;
		humanScoreSpan.textContent = humanScore;

		// Vérifier si quelqu'un a gagné
		if (humanScore === 5 || computerScore === 5) {
			const winner = humanScore === 5 ? 'You win the game! 🎉' : 'Computer wins the game! 🤖';
			currentRound.textContent = winner;

			// Désactiver les boutons pour stopper le jeu
			buttons.forEach((btn) => (btn.disabled = true));
		}
	})
);

// Fonction pour jouer un round
const playRound = (computerChoice, humanChoice) => {
	if (computerChoice === humanChoice) {
		return 'tie';
	} else if (computerChoice === 'ROCK') {
		return humanChoice === 'SCISSORS' ? 'computer' : 'human';
	} else if (computerChoice === 'SCISSORS') {
		return humanChoice === 'PAPER' ? 'computer' : 'human';
	} else if (computerChoice === 'PAPER') {
		return humanChoice === 'ROCK' ? 'computer' : 'human';
	}
};

const restartBtn = document.querySelector('#restart');

restartBtn.addEventListener('click', () => {
	humanScore = 0;
	computerScore = 0;

	humanScoreSpan.textContent = humanScore;
	computerScoreSpan.textContent = computerScore;
	currentRound.textContent = 'Game restarted! Make your move.';

	// Réactiver les boutons de jeu
	buttons.forEach((btn) => (btn.disabled = false));
});
