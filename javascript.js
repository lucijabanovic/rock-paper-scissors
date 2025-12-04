
function getComputerChoice() {
    let a = Math.random();
    if (a < 1/3) {
        return "rock";
    } else if (1/3 <= a && a < 2/3) {
        return "paper";
    } else return "scissors";
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
        
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    let humanCapitalized = humanChoice.at(0).toUpperCase() + humanChoice.slice(1);
    let computerCapitalized = computerChoice.at(0).toUpperCase() + computerChoice.slice(1);

    if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore ++;
        return `You lose! ${computerCapitalized} beats ${humanCapitalized}.`;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore ++;
        return `You win! ${humanCapitalized} beats ${computerCapitalized}.`;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore ++;
        return `You lose! ${computerCapitalized} beats ${humanCapitalized}.`;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore ++;
        return `You win! ${humanCapitalized} beats ${computerCapitalized}.`;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore ++;
        return `You lose! ${computerCapitalized} beats ${humanCapitalized}.`;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore ++;
        return `You win! ${humanCapitalized} beats ${computerCapitalized}.`;
    } else return "It's a tie.";

}

let btn = document.querySelectorAll(".choice");
let count = 0;

function handleClick(event) {
    let computerChoice = document.querySelector("#new");
    let compChoice = getComputerChoice();
    compChoice = compChoice.at(0).toUpperCase() + compChoice.slice(1);
    computerChoice.textContent = compChoice;

    let winner = document.querySelector("#winner");
    let userChoice = event.target.textContent;
    
    winner.textContent = playRound(userChoice, compChoice);
    count ++;

    if (count == 5) {
        if (humanScore > computerScore) {
            winner.textContent = `You win! The final score is ${humanScore}:${computerScore}`;
        } else if (humanScore < computerScore) {
            winner.textContent = `You lose! The final score is ${humanScore}:${computerScore}`;
        } else {
            winner.textContent = `It's a tie! The final score is ${humanScore}:${computerScore}`;
        }
        count = 0;
        humanScore = 0;
        computerScore = 0;
    }
}


btn.forEach(function (node) {
    node.addEventListener("click", handleClick);
});
