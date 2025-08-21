/**
 * The Rock 🪨, Paper 🧻, or Scissors ✂️ Game
 * This game will be played between the computer and human. Once Human will select Rock, Paper, or Scissors and in the next turn the computer will select Rock, Paper, or Scissors.
 * The Winner will be selected based on these rules:
 * - Rock can Break Scissors => Rock Wins
 * - Paper can wrap Rock => paper Wins
 * - Scissors can cut Paper => Scissors Wins
 * Ask the input from user and randomly select a computer selection to continue the game.
 */

// Assumptions:
// 1. We have to prompt the user to get their inputs.
// 2. The Computer's selection will be random.
// 3. We have to compare user and computer's choice
// 4. We need to announce the winner.
// 5. After the Winner announcement, we may want to ask the user to play again or quit from the game.

function rockBackSissors() {
  const userChoicePrompt = prompt("Enter Rock 🪨, Paper 🧻, or Scissors ✂️");
  let userchoice = userChoicePrompt.toLowerCase();

  let computerChoice;
  const ransdomNumber = Math.floor(Math.random() * 3) + 1;

  if (ransdomNumber === 1) {
    computerChoice = "rock";
  } else if (ransdomNumber === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  console.log("user slected", userchoice);
  console.log("computer sleceted", computerChoice);

  if (
    (userchoice === "rock" && computerChoice === "scissors") ||
    (userchoice === "paper" && computerChoice === "rock") ||
    (userchoice === "scissors" && computerChoice === "rock")
  ) {
    console.log("You the User WIN, yay!!!!");
  } else if (userchoice === computerChoice) {
    console.log("The Game is a Tie");
  } else if (
    (userchoice === "rock" && computerChoice === "paper") ||
    (userchoice === "paper" && computerChoice === "scissors") ||
    (userchoice === "scissors" && computerChoice === "rock")
  ) {
    console.log("Oh Ho... Computer Wins!!!!");
  } else {
    console.log("Please check the input, We didn't understand it.");
  }

  const playAgainPrompt = prompt("Do You Want to Play Again? (yes/no)");
  const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : "no";
  if (playAgain === "yes") {
    rockBackSissors();
  } else {
    console.log("Thanks for Playing! See you Next Time");
  }
}

rockBackSissors();
