// * Rock Paper Scissors

// Function to get computer choice randomly
function getComputerChoice() {
  // Make an array of choices
  let choices = ["rock", "paper", "scissors"];

  // Make a random choice
  let randomChoice = Math.floor(Math.random() * choices.length);
  let choiceName = choices[randomChoice];

  return choiceName;
}

// Function to get and compare player choice and computer choice
function playRound(playerSelection, computerSelection) {
  // Make the user input case insensitive
  playerSelection = playerSelection.toLowerCase();

  if ((playerSelection === "paper") && (computerSelection === "rock")) {
    return "You win! Paper beats Rock!";
  } else if ((playerSelection === "rock") && (computerSelection === "paper")) {
    return "You lose! Paper beats Rock!";
  } else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
    return "You win! Scissors beats Paper!";
  } else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
    return "You lose! Scissors beats Paper!";
  } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
    return "You win! Rock beats Scissors!";
  } else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
    return "You lose! Rock beats Scissors!";
  } else if (playerSelection === computerSelection) {
    return "It's a draw!";
  }
}