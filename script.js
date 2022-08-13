// ROCK PAPER SCISSORS
// Player and Computer Scores
let pScore = 0;
let cScore = 0;

// Document Element Selectors
const playerItems = document.querySelectorAll('#player-items img');
const computerItems = document.querySelectorAll('#computer-items img');
const computerRock = document.querySelector('#computer-rock');
const computerPaper = document.querySelector('#computer-paper');
const computerScissors = document.querySelector('#computer-scissors');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const roundResult = document.querySelector('#round-result');
const finalResult = document.querySelector('#final-result');
const reset = document.querySelector('#reset');

// Function to get computer choice
function computerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];

  if (computerChoice === 'rock') {
    computerRock.setAttribute('class', 'w-20 md:w-20 rounded-full border-4 border-solid scale-125 border-lightGray');
  } else if (computerChoice === 'paper') {
    computerPaper.setAttribute('class', 'w-20 md:w-20 rounded-full border-4 border-solid scale-125 border-lightGray');
  } else {
    computerScissors.setAttribute('class', 'w-20 md:w-20 rounded-full border-4 border-solid scale-125 border-lightGray');
  }

  return computerChoice;
}

//  Function to record scores and give result
function scoreCounter(playerChoice, computerChoice) {
  let upperPlayerChoice = (playerChoice.charAt(0)).toUpperCase() + playerChoice.slice(1);
  let upperComputerChoice = (computerChoice.charAt(0)).toUpperCase() + computerChoice.slice(1);

  if (((playerChoice === "paper") && (computerChoice === "rock")) ||
  ((playerChoice === "scissors") && (computerChoice === "paper")) ||
  ((playerChoice === "rock") && (computerChoice === "scissors"))) {
    if ((pScore < 5) && (cScore < 5)) {
      pScore++;
    } else if ((pScore === 5) && (cScore < 5)) {
      cScore;
    }
    playerScore.textContent = pScore;
    roundResult.textContent = `You win this round! ${upperPlayerChoice} beats ${upperComputerChoice}.`;
  } else if (((playerChoice === "rock") && (computerChoice === "paper")) ||
  ((playerChoice === "paper") && (computerChoice === "scissors")) ||
  ((playerChoice === "scissors") && (computerChoice === "rock"))) {
    if ((cScore < 5) && (pScore < 5)) {
      cScore++;
    } else if ((cScore === 5) && (pScore < 5)) {
      cScore;
    }
    computerScore.textContent = cScore;
    roundResult.textContent = `You lose this round! ${upperComputerChoice} beats ${upperPlayerChoice}.`;
  } else {
    roundResult.textContent = 'Tie Game! No winner, no loser. Go again!';
  }

  if (pScore === 5) {
    finalResult.textContent = "Congratulations! You've won the game!";
    roundResult.textContent = 'Click the play again button to restart the game.';
    reset.firstElementChild.textContent = 'Play Again';

    resetItems();
    nonClickable();
  }

  if (cScore === 5) {
    finalResult.textContent = "You've lost the game! Give it another try.";
    roundResult.textContent = 'Click the play again button to restart the game.';
    reset.firstElementChild.textContent = 'Play Again';

    resetItems();
    nonClickable();
  }
}

// Function to get player choice and play game
function playGame() {
  let playerChoice;

  resetGame();
  
  Array.from(playerItems).forEach(playerItem => {
    playerItem.addEventListener('click', e => {
      resetItems();

      e.target.setAttribute('class', 'w-20 md:w-20 rounded-full cursor-pointer hover:scale-125 hover:border-lightGray hover:border-4 hover:border-solid active:scale-150 active:border-black');

      if (e.target.id === 'player-rock') {
        playerChoice = 'rock';
      } else if (e.target.id === 'player-paper') {
        playerChoice = 'paper';
      } else {
        playerChoice = 'scissors';
      }

      scoreCounter(playerChoice, computerChoice());
    });
  });
}

// Function to reset the game
function resetGame() {
  reset.addEventListener('click', () => {
    pScore = 0;
    cScore = 0;
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
    roundResult.textContent = 'Choose between Rock, Paper and Scissors!';
    finalResult.textContent = "First to score five wins the game!";
    reset.firstElementChild.textContent = 'Reset';

    resetItems();
  });
}

// Function to reset the playing items
function resetItems() {
  Array.from(playerItems).forEach(playerItem => {
    playerItem.setAttribute('class', 'w-20 md:w-20 rounded-full cursor-pointer hover:scale-110 hover:border-lightGray hover:border-4 hover:border-solid active:scale-150 active:border-black');
  });

  Array.from(computerItems).forEach(computerItem => {
    computerItem.setAttribute('class', 'w-20 md:w-20 rounded-full');
  });
}

// Function to make player items non-clickable after win or lose
function nonClickable() {
  Array.from(playerItems).forEach(playerItem => {
    playerItem.setAttribute('class', 'w-20 md:w-20 rounded-full');
  });
}

playGame();