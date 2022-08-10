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

// Play Game Event
Array.from(playerItems).forEach(playerItem => {
  playerItem.addEventListener('click', playGame);
});

function playGame(e) {
  // Get Player Choice
  let playerChoice;

  Array.from(playerItems).forEach(playerItem => {
    playerItem.setAttribute('class', 'w-16 md:w-20 rounded-full cursor-pointer hover:scale-110 hover:border-lightGray hover:border-4 hover:border-solid active:scale-150 active:border-black');
  });

  Array.from(computerItems).forEach(computerItem => {
    computerItem.setAttribute('class', 'w-16 md:w-20 rounded-full');
  });

  e.target.setAttribute('class', 'w-16 md:w-20 rounded-full cursor-pointer hover:scale-125 hover:border-lightGray hover:border-4 hover:border-solid active:scale-150 active:border-black');

  if (e.target.id === 'player-rock') {
    playerChoice = 'rock';
  } else if (e.target.id === 'player-paper') {
    playerChoice = 'paper';
  } else {
    playerChoice = 'scissors';
  }
  // console.log(playerChoice);

  // Get Computer Choice
  let choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];

  if (computerChoice === 'rock') {
    computerRock.setAttribute('class', 'w-16 md:w-20 rounded-full border-4 border-solid scale-150 border-lightGray');
  } else if (computerChoice === 'paper') {
    computerPaper.setAttribute('class', 'w-16 md:w-20 rounded-full border-4 border-solid scale-150 border-lightGray');
  } else {
    computerScissors.setAttribute('class', 'w-16 md:w-20 rounded-full border-4 border-solid scale-150 border-lightGray');
  }
  // console.log(computerChoice);

  // Compare Player Choice with Computer Choice
  let oneRoundResult;
  let upperPlayerChoice = (playerChoice.charAt(0)).toUpperCase() + playerChoice.slice(1);
  let upperComputerChoice = (computerChoice.charAt(0)).toUpperCase() + computerChoice.slice(1);

  if (playerChoice === computerChoice) {
    oneRoundResult = 'Tie Game! No winner, no loser. Go again!';
  } else if ((playerChoice === "paper") && (computerChoice === "rock") ||
  ((playerChoice === "scissors") && (computerChoice === "paper")) ||
  ((playerChoice === "rock") && (computerChoice === "scissors"))) {
    oneRoundResult = `You win this round! ${upperPlayerChoice} beats ${upperComputerChoice}.`;
  } else {
    oneRoundResult = `You lose this round! ${upperComputerChoice} beats ${upperPlayerChoice}.`;
  }
  // console.log(oneRoundResult);

  // Play Game
  let pScore = Number(playerScore);
  let cScore = Number(computerScore);

  for (;;) {
    if (((oneRoundResult === "You win this round! Paper beats Rock.") ||
    (oneRoundResult === "You win this round! Scissors beats Paper.") ||
    (oneRoundResult === "You win this round! Rock beats Scissors.")) && pScore < 5) {
      pScore++;
      roundResult.textContent = oneRoundResult;
    }

    // if (((oneRoundResult === "You win this round! Paper beats Rock.") ||
    // (oneRoundResult === "You win this round! Scissors beats Paper.") ||
    // (oneRoundResult === "You win this round! Rock beats Scissors.")) && pScore < 5) {
    //   pScore++;
    //   roundResult.textContent = oneRoundResult;
    // } else if (((oneRoundResult === "You lose this round! Paper beats Rock.") ||
    // (oneRoundResult === "You lose this round! Scissors beats Paper.") ||
    // (oneRoundResult === "You lose this round! Rock beats Scissors.")) && cScore < 5) {
    //   cScore++;
    //   roundResult.textContent = oneRoundResult;
    // } else if ((oneRoundResult === "Tie Game! No winner, no loser. Go again!") && ((pScore < 5) || cScore < 5)) {
    //   roundResult.textContent = oneRoundResult;
    // } else if (oneRoundResult === undefined) {
    //   break;
    // }

    console.log(roundResult.textContent);
    // console.log(`player score: ${pScore}`);
    // console.log(`computer score: ${cScore}`);
    // playerScore = `${pScore}`;
    // computerScore = `${cScore}`;

    // if ((pScore === 5) || (cScore === 5)) {
    //   break;
    // }
  }
}































/*
// Function to play game
function game() {
  let pScore = Number(playerScore);
  let cScore = Number(computerScore);
  

  let result = playRound();
    console.log(result);
  for (;;) {
    

    if (((result === "You win this round! Paper beats Rock.") ||
    (result === "You win this round! Scissors beats Paper.") ||
    (result === "You win this round! Rock beats Scissors.")) && pScore < 5) {
      pScore++;
      roundResult = result;
    } else if (((result === "You lose this round! Paper beats Rock.") ||
    (result === "You lose this round! Scissors beats Paper.") ||
    (result === "You lose this round! Rock beats Scissors.")) && cScore < 5) {
      cScore++;
      roundResult = result;
    } else if ((result === "Tie Game! No winner, no loser. Go again!") && ((pScore < 5) || cScore < 5)) {
      roundResult = result;
    } else if (result === undefined) {
      break;
    }
    console.log(`player score: ${pScore}`);
    console.log(`computer score: ${cScore}`);
    playerScore = `${pScore}`;
    computerScore = `${cScore}`;

    if ((pScore === 5) || (cScore === 5)) {
      break;
    }
  }

  if (pScore > cScore) {
    finalResult = "You've won the game!";
  } else {
    finalResult = "You've lost the game!";
  }
  
  playAgain.setAttribute('class', 'upperZ invisible container mx-auto font-boxing text-xl mb-12 sm:text-2xl md:text-4xl')
}

game();

function playAgain() {
  let playAgain = document.querySelector('#play-again');
  
  playAgain.addEventListener('click', e => {
    if (e.target.classList.contains === 'invisible') {
      return;
    } else {
      game();
    }
  });
}

playAgain();
*/