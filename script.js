// Rock Paper Scissors

// Function to get computer choice randomly
function getComputerChoice() {
  // Make and return a random choice from an array of choices
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

// Function to get player choice
function getPlayerChoice() {
  // Ask player for a choice
  let playerChoice = prompt("Choose between rock, paper and scissors: ");
  playerChoice = playerChoice.toLowerCase();
  return playerChoice;
}

// Function to play one round
function playRound(playerSelection, computerSelection) {
  let result;
  let upperPlayerSelection = (playerSelection.charAt(0)).toUpperCase() + playerSelection.slice(1);
  let upperComputerSelection = (computerSelection.charAt(0)).toUpperCase() + computerSelection.slice(1);
  console.log(playerSelection);
  console.log(computerSelection);
  if (playerSelection === computerSelection) {
    result = "Tie Game!";
    return result;
  } else if ((playerSelection === "paper") && (computerSelection === "rock") ||
  ((playerSelection === "scissors") && (computerSelection === "paper")) ||
  ((playerSelection === "rock") && (computerSelection === "scissors"))) {
    result = `You win this round! ${upperPlayerSelection} beats ${upperComputerSelection}.`;
    return result;
  } else {
    result = `You lose this round! ${upperComputerSelection} beats ${upperPlayerSelection}.`;
    return result;
  }
}

// Function to play game
function game() {
  let playerScore = 0;
  let computerScore = 0;
  let result
  for (; ;) {
    result = playRound(getPlayerChoice(), getComputerChoice());

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

game()