// ROCK PAPER SCISSORS

// Player and Computer Scores
let pScore = 0;
let cScore = 0;

// Document Element Selectors
const playerItemsElements = document.querySelectorAll('#player-items img');
const computerItemsElements = document.querySelectorAll('#computer-items img');
const computerRockElement = document.querySelector('#computer-rock');
const computerPaperElement = document.querySelector('#computer-paper');
const computerScissorsElement = document.querySelector('#computer-scissors');
const playerScoreElement = document.querySelector('#player-score');
const computerScoreElement = document.querySelector('#computer-score');
const roundResultElement = document.querySelector('#round-result');
const finalResultElement = document.querySelector('#final-result');
const resetElement = document.querySelector('#reset');

// Function to get computer choice
function computerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];

  if (computerChoice === 'rock') {
    computerRockElement.setAttribute('class', 'w-20 md:w-20 rounded-full border-4 border-solid scale-125 border-lightGray');
  } else if (computerChoice === 'paper') {
    computerPaperElement.setAttribute('class', 'w-20 md:w-20 rounded-full border-4 border-solid scale-125 border-lightGray');
  } else {
    computerScissorsElement.setAttribute('class', 'w-20 md:w-20 rounded-full border-4 border-solid scale-125 border-lightGray');
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
    playerScoreElement.textContent = pScore;
    roundResultElement.style.color = 'lawngreen';
    roundResultElement.textContent = `You win this round! ${upperPlayerChoice} beats ${upperComputerChoice}.`;
  } else if (((playerChoice === "rock") && (computerChoice === "paper")) ||
  ((playerChoice === "paper") && (computerChoice === "scissors")) ||
  ((playerChoice === "scissors") && (computerChoice === "rock"))) {
    if ((cScore < 5) && (pScore < 5)) {
      cScore++;
    } else if ((cScore === 5) && (pScore < 5)) {
      cScore;
    }
    computerScoreElement.textContent = cScore;
    roundResultElement.style.color = '#e10600';
    roundResultElement.textContent = `You lose this round! ${upperComputerChoice} beats ${upperPlayerChoice}.`;
  } else {
    roundResultElement.style.color = 'black';
    roundResultElement.textContent = 'Tie Game! No winner, no loser. Go again!';
  }

  winGame(pScore);
  loseGame(cScore);
}

// Function to run when game is won
function winGame(pScore) {
  if (pScore === 5) {
    finalResultElement.style.color = 'lawngreen';
    roundResultElement.style.color = 'black';
    finalResultElement.textContent = "Congratulations! You've won the game!";
    roundResultElement.textContent = 'Click the play again button to restart the game.';
    resetElement.firstElementChild.textContent = 'Play Again';

    resetItems();
    nonClickable();
  }
}

// Function to run when game is lost
function loseGame(cScore) {
  if (cScore === 5) {
    finalResultElement.style.color = '#e10600';
    roundResultElement.style.color = 'black';
    finalResultElement.textContent = "You've lost the game! Give it another try.";
    roundResultElement.textContent = 'Click the play again button to restart the game.';
    resetElement.firstElementChild.textContent = 'Play Again';

    resetItems();
    nonClickable();
  }
}

// Function to get player choice and play game
function playGame() {
  let playerChoice;

  resetGame();
  
  Array.from(playerItemsElements).forEach(playerItem => {
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
  resetElement.addEventListener('click', () => {
    pScore = 0;
    cScore = 0;
    playerScoreElement.textContent = pScore;
    computerScoreElement.textContent = cScore;
    roundResultElement.style.color = 'black';
    finalResultElement.style.color = 'black';
    roundResultElement.textContent = 'Choose between Rock, Paper and Scissors!';
    finalResultElement.textContent = "First to score five wins the game!";
    resetElement.firstElementChild.textContent = 'Reset';

    resetItems();
  });
}

// Function to reset the playing items
function resetItems() {
  Array.from(playerItemsElements).forEach(playerItem => {
    playerItem.setAttribute('class', 'w-20 md:w-20 rounded-full cursor-pointer hover:scale-110 hover:border-lightGray hover:border-4 hover:border-solid active:scale-150 active:border-black');
  });

  Array.from(computerItemsElements).forEach(computerItem => {
    computerItem.setAttribute('class', 'w-20 md:w-20 rounded-full');
  });
}

// Function to make player items non-clickable after win or lose
function nonClickable() {
  Array.from(playerItemsElements).forEach(playerItem => {
    playerItem.setAttribute('class', 'w-20 md:w-20 rounded-full');
  });
}

playGame();