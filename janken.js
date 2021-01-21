const moves = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  let moves = [Math.floor(Math.random() * moves.length)];
  switch (moves) {
      case 0:
          return "rock";
      case 1:
          return "paper";
      case 2:
          return "scissors";
  
}

function playRound(playerSelection, computerSelection) {}
