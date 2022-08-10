// Rock Paper Scissors

// Function to play one round
function playRound() {
  const playerItems = document.querySelectorAll('#player-items img');
  const computerItems = document.querySelectorAll('#computer-items img');
  let playerChoice;

  Array.from(playerItems).forEach(playerItem => {
    playerItem.addEventListener('click', e => {
      Array.from(playerItems).forEach(playerItem => {
        playerItem.setAttribute('class', 'w-16 md:w-20 rounded-full cursor-pointer hover:scale-110 hover:border-lightGray hover:border-4 hover:border-solid active:scale-150 active:border-black');
      });

      Array.from(computerItems).forEach(computerItem => {
        computerItem.setAttribute('class', 'w-16 md:w-20 cursor-pointer rounded-full');
      });

      e.target.setAttribute('class', 'w-16 md:w-20 cursor-pointer rounded-full scale-125 border-lightGray border-4 border-solid');
      e.target.setAttribute('class', 'w-16 md:w-20 rounded-full cursor-pointer hover:scale-110 hover:border-lightGray hover:border-4 hover:border-solid active:scale-150 active:border-black');

      if (e.target.id === 'player-rock') {
        playerChoice = 'rock';
      } else if (e.target.id === 'player-paper') {
        playerChoice = 'paper';
      } else {
        playerChoice = 'scissors';
      }
      console.log(playerChoice);

      // Make and return a random choice from an array of choices
      let choices = ["rock", "paper", "scissors"];
      let computerChoice = choices[Math.floor(Math.random() * choices.length)];

      if (computerChoice === 'rock') {
        let computerRock = document.querySelector('#computer-rock');
        computerRock.setAttribute('class', 'w-16 md:w-20 rounded-full border-4 border-solid scale-150 border-black');
      } else if (computerChoice === 'paper') {
        let computerPaper = document.querySelector('#computer-paper');
        computerPaper.setAttribute('class', 'w-16 md:w-20 rounded-full border-4 border-solid scale-150 border-black');
      } else {
        let computerScissors = document.querySelector('#computer-scissors');
        computerScissors.setAttribute('class', 'w-16 md:w-20 rounded-full border-4 border-solid scale-150 border-black');
      }
      console.log(computerChoice);

      // Compare Player Choice with Computer Choice
      let roundResult = document.querySelector('#round-result');
      let upperPlayerChoice = (playerChoice.charAt(0)).toUpperCase() + playerChoice.slice(1);
      let upperComputerChoice = (computerChoice.charAt(0)).toUpperCase() + computerChoice.slice(1);

      if (playerChoice === computerChoice) {
        roundResult.textContent = 'Tie Game! No winner, no loser. Go again!';
      } else if ((playerChoice === "paper") && (computerChoice === "rock") ||
      ((playerChoice === "scissors") && (computerChoice === "paper")) ||
      ((playerChoice === "rock") && (computerChoice === "scissors"))) {
        roundResult.textContent = `You win this round! ${upperPlayerChoice} beats ${upperComputerChoice}.`;
      } else {
        roundResult.textContent = `You lose this round! ${upperComputerChoice} beats ${upperPlayerChoice}.`;
      }

      console.log(roundResult);
      return roundResult;
    });
  });
}

playRound();


// Function to play game
function game() {
  let playerScore = 0;
  let computerScore = 0;
  let result
  for (;;) {
    result = playRound(playerChoice, computerChoice);

    if (((result === "You win this round! Paper beats Rock.") ||
    (result === "You win this round! Scissors beats Paper.") ||
    (result === "You win this round! Rock beats Scissors.")) && playerScore < 5) {
      playerScore++;
      console.log(result);
    } else if (((result === "You lose this round! Paper beats Rock.") ||
    (result === "You lose this round! Scissors beats Paper.") ||
    (result === "You lose this round! Rock beats Scissors.")) && computerScore < 5) {
      computerScore++;
      console.log(result);
    } else if ((result === "Tie Game!") && ((playerScore < 5) || computerScore < 5)) {
      console.log(result);
    }

    console.log(`Player Score => ${playerScore} : Computer Score => ${computerScore}`);

    if ((playerScore === 5) || (computerScore === 5)) {
      break;
    }
  }

  if (playerScore > computerScore) {
    console.log("You've won the game!");
  } else {
    console.log("You've lost the game!");
  }
}
