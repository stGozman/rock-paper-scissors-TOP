// Rock Paper Scissors

// Function to play one round
function playRound() {
  const playerItems = document.querySelectorAll('#player-items img');
  let playerChoice;

  Array.from(playerItems).forEach(playerItem => {
    playerItem.addEventListener('click', e => {
      if (e.target.id === 'player-rock') {
        e.target.setAttribute('class', 'w-20 border-lightGray border-4 border-solid rounded-full transition scale-125');
        playerChoice = 'rock';
      } else if (e.target.id === 'player-paper') {
        e.target.setAttribute('class', 'w-20 border-lightGray border-4 border-solid rounded-full transition scale-125');
        playerChoice = 'paper';
      } else {
        e.target.setAttribute('class', 'w-20 border-lightGray border-4 border-solid rounded-full transition scale-125');
        playerChoice = 'scissors';
      }
      console.log(playerChoice);

      // Make and return a random choice from an array of choices
      let choices = ["rock", "paper", "scissors"];
      let computerChoice = choices[Math.floor(Math.random() * choices.length)];

      if (computerChoice === 'rock') {
        let computerRock = document.querySelector('#computer-rock');
        computerRock.setAttribute('class', 'w-20 border-lightGray border-4 border-solid rounded-full transition scale-125');
      } else if (computerChoice === 'paper') {
        let computerPaper = document.querySelector('#computer-paper');
        computerPaper.setAttribute('class', 'w-20 border-lightGray border-4 border-solid rounded-full transition scale-125');
      } else {
        let computerScissors = document.querySelector('#computer-scissors');
        computerScissors.setAttribute('class', 'w-20 border-lightGray border-4 border-solid rounded-full transition scale-125');
      }
      console.log(computerChoice);

      // Compare Player Choice with Computer Choice
      let result;
      let upperPlayerChoice = (playerChoice.charAt(0)).toUpperCase() + playerChoice.slice(1);
      let upperComputerChoice = (computerChoice.charAt(0)).toUpperCase() + computerChoice.slice(1);

      if (playerChoice === computerChoice) {
        result = 'Tie Game!';
      } else if ((playerChoice === "paper") && (computerChoice === "rock") ||
      ((playerChoice === "scissors") && (computerChoice === "paper")) ||
      ((playerChoice === "rock") && (computerChoice === "scissors"))) {
        result = `You win this round! ${upperPlayerChoice} beats ${upperComputerChoice}.`;
      } else {
        result = `You lose this round! ${upperComputerChoice} beats ${upperPlayerChoice}.`;
      }

      console.log(result);
      return result;
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





















// // Function to get computer choice randomly
// function computerChoice {
//   // Make and return a random choice from an array of choices
//   let choices = ["rock", "paper", "scissors"];
//   let computerChoice = choices[Math.floor(Math.random() * choices.length)];

//   if (computerChoice === 'rock') {
//     let computerRock = document.querySelector('#computer-rock');
//     computerRock.setAttribute('class', 'w-20 border-lightGray border-4 border-solid rounded-full transition scale-125');
//   } else if (computerChoice === 'paper') {
//     let computerPaper = document.querySelector('#computer-paper');
//     computerPaper.setAttribute('class', 'w-20 border-lightGray border-4 border-solid rounded-full transition scale-125');
//   } else {
//     let computerScissors = document.querySelector('#computer-scissors');
//     computerScissors.setAttribute('class', 'w-20 border-lightGray border-4 border-solid rounded-full transition scale-125');
//   }

//   return computerChoice;
// }

// // Function to get player choice
// function playerChoice {
//   const playerItems = document.querySelectorAll('#player-items img');
//   let playerChoice;

//   Array.from(playerItems).forEach(playerItem => {
//     playerItem.addEventListener('click', e => {
//       if (e.target.id === 'player-rock') {
//         e.target.setAttribute('class', 'w-20 border-lightGray border-4 border-solid rounded-full transition scale-125');
//         playerChoice = 'rock';
//       } else if (e.target.id === 'player-paper') {
//         e.target.setAttribute('class', 'w-20 border-lightGray border-4 border-solid rounded-full transition scale-125');
//         playerChoice = 'paper';
//       } else {
//         e.target.setAttribute('class', 'w-20 border-lightGray border-4 border-solid rounded-full transition scale-125');
//         playerChoice = 'scissors';
//       }

//       // Make and return a random choice from an array of choices
//       let choices = ["rock", "paper", "scissors"];
//       let computerChoice = choices[Math.floor(Math.random() * choices.length)];

//       if (computerChoice === 'rock') {
//         let computerRock = document.querySelector('#computer-rock');
//         computerRock.setAttribute('class', 'w-20 border-lightGray border-4 border-solid rounded-full transition scale-125');
//       } else if (computerChoice === 'paper') {
//         let computerPaper = document.querySelector('#computer-paper');
//         computerPaper.setAttribute('class', 'w-20 border-lightGray border-4 border-solid rounded-full transition scale-125');
//       } else {
//         let computerScissors = document.querySelector('#computer-scissors');
//         computerScissors.setAttribute('class', 'w-20 border-lightGray border-4 border-solid rounded-full transition scale-125');
//       }
//       return playerChoice;
//     });
//   });
// }
