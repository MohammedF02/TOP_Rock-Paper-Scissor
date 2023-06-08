let matchPlayed = 0;
let playerScore = 0;
let computerScore = 0;

var playerDiv = document.createElement("div")
var computerDiv = document.createElement("div")

document.getElementById("playerScore").append(playerDiv);
document.getElementById("computerScore").append(computerDiv);

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');


var roundDiv = document.createElement("div");
var Matchdiv = document.createElement("div");

document.getElementById("displayRound").append(roundDiv);
document.getElementById("displayMatch").append(Matchdiv);


function getComputerChoice() {
    rand = ["rock", "paper", "scissor"];
    let random = Math.floor(Math.random() * 3);
    return rand[random];
}

function playRound(playerSelection, computerSelection) {
    matchPlayed++;
    if (playerSelection == "rock" && computerSelection == "paper") {
        roundDiv.innerHTML = "You Lose! Paper beats Rock";
        computerScore++;
    } else if (playerSelection == "paper" && computerSelection == "scissor") {
        roundDiv.innerHTML = ("You Lose! Scissor beats Paper");
        computerScore++;
    } else if (playerSelection == "scissor" && computerSelection == "rock") {
        roundDiv.innerHTML = ("You Lose! Rock beats Scissor");
        computerScore++;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        roundDiv.innerHTML = ("You win! Paper beats Rock");
        playerScore++;
    } else if (playerSelection == "scissor" && computerSelection == "paper") {
        roundDiv.innerHTML = ("You win! Scissor beats Paper");
        playerScore++;
    } else if (playerSelection == "rock" && computerSelection == "scissor") {
        playerScore++;
        roundDiv.innerHTML = ("You win! Rock beats Scissor");
    } else {
        roundDiv.innerHTML = ("You draw!");
    }
    
    playerDiv.innerHTML = "Player Score: " + playerScore;
    computerDiv.innerHTML = "Computer Score: " + computerScore;
    

    if (matchPlayed === 5) {
        if (playerScore > computerScore) {
            Matchdiv.innerHTML = "Player wins!";
        } else if (computerScore > playerScore) {
            Matchdiv.innerHTML = "Computer wins!";
        } else {
            Matchdiv.innerHTML = "It is a draw!";
        }
        matchPlayed = 0;
        playerScore = 0;
        computerScore = 0;
    }
}

rock.addEventListener("click", () => {
    playerSelection = "rock";
    playRound("rock", getComputerChoice());
});

paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

scissor.addEventListener("click", () => {
    playRound("scissor", getComputerChoice());
});

