// * Rock Paper Scissors

// * Function to get computer choice randomly
function getComputerChoice() {
  // Make an array of choices
  let choices = ["rock", "paper", "scissors"];

  // Make a random choice
  let randomChoice = Math.floor(Math.random() * choices.length);
  let choiceName = choices[randomChoice];

  console.log(choiceName);
  alert(`Computer chose ${choiceName}`); // TBR

  return choiceName;
}

// * Function to get player choice
function getPlayerChoice() {
  let playerChoice = prompt("Choose between rock, paper and scissors: ")

  // Make the user input case insensitive
  playerChoice = playerChoice.toLowerCase();

  // Make any wrong input return "undefined"
  if ((playerChoice !== "rock") && (playerChoice !== "paper") && (playerChoice !== "scissors")) {
     
    return;
  }
 
  alert(`Player chose ${playerChoice}`); // TBR
 
  return playerChoice;
}

// Function to get and compare player choice and computer choice
function playRound(playerSelection, computerSelection) {
  // Return the result of one round
  if ((playerSelection === "paper") && (computerSelection === "rock")) {
    let win1 = "You win! Paper beats Rock!";
    return win1;
  } else if ((playerSelection === "rock") && (computerSelection === "paper")) {
    let lose1 = "You lose! Paper beats Rock!";
    return lose1;
  } else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
    let win2 = "You win! Scissors beats Paper!";
    return win2;
  } else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
    let lose2 = "You lose! Scissors beats Paper!";
    return lose2;
  } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
    let win3 = "You win! Rock beats Scissors!";
    return win3;
  } else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
    let lose3 = "You lose! Rock beats Scissors!";
    return lose3;
  } else if (playerSelection === computerSelection) {
    let draw = "It's a draw!";
    return draw;
  } else {
    // Return invalid for any wrong input
    let invalid = "Invalid input!";
    return invalid;
  }
}
 
// console.log(playRound(getPlayerChoice(), getComputerChoice())); TBR

// Play game five times
function game() {
  let win1 = "You win! Paper beats Rock!";
  let lose1 = "You lose! Paper beats Rock!";
  let win2 = "You win! Scissors beats Paper!";
  let lose2 = "You lose! Scissors beats Paper!";
  let win3 = "You win! Rock beats Scissors!";
  let lose3 = "You lose! Rock beats Scissors!";
  let playerScore = 0;
  let computerScore = 0;
  let roundsLeft = 5;
  for (let i = 0; i < 5; i++) {
    let result = playRound(getPlayerChoice(), getComputerChoice());
    if ((result === win1) || (result === win2) || (result === win3)) {
      playerScore++;
    } else if ((result === lose1) || (result === lose2) || (result === lose3)) {
      computerScore++;
    } else {
      i--;
    }
   
    alert(result); // TBR
    console.log(result);
   
    alert(`Player Score => ${playerScore} : Computer Score => ${computerScore}`); // TBR
   
    console.log(`Player Score => ${playerScore} : Computer Score => ${computerScore}`);
   
    if ((playerScore > 2) || (computerScore > 2)) {
      break;
    }
   
    roundsLeft = 4 - i;
    alert(`${roundsLeft} rounds remaining`); // TBR
    console.log(`${roundsLeft} rounds remaining`);
  }
 
  if (playerScore > computerScore) {
    alert("Congrats! You won the game!");
    console.log("Congrats! You won the game!");
  } else {
    alert("Sorry. You lost the game.");
    console.log("Sorry. You lost the game.");
  }
}

game();