function getComputerChoice() {
    rand = ["rock", "paper", "scissor"];
    let random = Math.floor(Math.random() * 3);
    return rand[random];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("You Lose! Paper beats Rock");
        computerScore++;
    } else if (playerSelection == "paper" && computerSelection == "scissor") {
        console.log("You Lose! Scissor beats Paper");
        computerScore++;
    } else if (playerSelection == "scissor" && computerSelection == "rock") {
        console.log("You Lose! Rock beats Scissor");
        computerScore++;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You win! Paper beats Rock");
        playerScore++;
    } else if (playerSelection == "scissor" && computerSelection == "paper") {
        console.log("You win! Scissor beats Paper");
        playerScore++;
    } else if (playerSelection == "rock" && computerSelection == "scissor") {
        console.log("You win! Rock beats Scissor");
        playerScore++;
    } else {
        console.log("You draw!");
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose one: Rock, Paper or Scissor");
        let computerSelection = getComputerChoice();


        console.log(playRound(playerSelection.toLowerCase(), computerSelection));
        console.log("Player Score: " + playerScore + " ComputerScore: " + computerScore);
    }
    if (playerScore > computerScore) {
        console.log("Player wins!");
    } else if (computerScore > playerScore) {
        console.log("Computer wins!");
    } else {
        console.log("It is a draw!");
    }
}

let playerScore = 0;
let computerScore = 0;

console.log(game());