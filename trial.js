// Rock Paper Scissors

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
const playAgain = document.querySelector('#play-again');

// Function To Get Computer Choice
function computerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];

  if (computerChoice === 'rock') {
    computerRock.setAttribute('class', 'w-16 md:w-20 rounded-full border-4 border-solid scale-150 border-lightGray');
  } else if (computerChoice === 'paper') {
    computerPaper.setAttribute('class', 'w-16 md:w-20 rounded-full border-4 border-solid scale-150 border-lightGray');
  } else {
    computerScissors.setAttribute('class', 'w-16 md:w-20 rounded-full border-4 border-solid scale-150 border-lightGray');
  }

  console.log(computerChoice);
  return computerChoice;
}

// Function To Get Player Choice
function playerChoice() {
  Array.from(playerItems).forEach(playerItem => {
    playerItem.addEventListener('click', () => {
      let getPlayerChoice;

      Array.from(playerItems).forEach(playerItem => {
        playerItem.setAttribute('class', 'w-16 md:w-20 rounded-full cursor-pointer hover:scale-110 hover:border-lightGray hover:border-4 hover:border-solid active:scale-150 active:border-black');
      });

      Array.from(computerItems).forEach(computerItem => {
        computerItem.setAttribute('class', 'w-16 md:w-20 rounded-full');
      });

      playerItem.setAttribute('class', 'w-16 md:w-20 rounded-full cursor-pointer hover:scale-125 hover:border-lightGray hover:border-4 hover:border-solid active:scale-150 active:border-black');

      if (playerItem.id === 'player-rock') {
        getPlayerChoice = 'rock';
      } else if (playerItem.id === 'player-paper') {
        getPlayerChoice = 'paper';
      } else {
        getPlayerChoice = 'scissors';
      }

      console.log(getPlayerChoice);
      // return getPlayerChoice;
    });
  });
}

playerChoice();




function getPlayerChoice() {
  let playerChoice;

  Array.from(playerItems).forEach(playerItem => {
    playerItem.setAttribute('class', 'w-16 md:w-20 rounded-full cursor-pointer hover:scale-110 hover:border-lightGray hover:border-4 hover:border-solid active:scale-150 active:border-black');
  });

  Array.from(computerItems).forEach(computerItem => {
    computerItem.setAttribute('class', 'w-16 md:w-20 rounded-full');
  });

  playerItem.setAttribute('class', 'w-16 md:w-20 rounded-full cursor-pointer hover:scale-125 hover:border-lightGray hover:border-4 hover:border-solid active:scale-150 active:border-black');

  if (playerItem.id === 'player-rock') {
    playerChoice = 'rock';
  } else if (playerItem.id === 'player-paper') {
    playerChoice = 'paper';
  } else {
    playerChoice = 'scissors';
  }

  console.log(playerChoice);
  return playerChoice;
}

playerChoice();